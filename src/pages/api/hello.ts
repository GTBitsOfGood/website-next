// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as contentful from 'contentful'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

type Data = {
  data : any
}

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { contentType, key } = req.query;

  if (!key && contentType) {
    const schemaPromise = client.getContentType(contentType as string)
    const entriesPromise = client.getEntries({
      content_type: contentType as string,
      include: 10,
    })
    const [schema, entries] = await Promise.all([
      schemaPromise,
      entriesPromise,
    ])
    let items = await Promise.all(
      entries.items.map(entry => mapEntry(entry, schema))
    )
    if (items.length && typeof items[0].orderingIndex === 'number') {
      items = items.sort(
        (first, second) => first.orderingIndex - second.orderingIndex
      )
    }

    res.status(200).json({ data : items })
  } else if (key && contentType) {
    const schemaPromise = client.getContentType(contentType as string)
    const entriesPromise = client.getEntries({
      content_type: contentType as string,
      'fields.key': key,
      limit: 1,
      include: 10,
    })
    const [schema, entries] = await Promise.all([
      schemaPromise,
      entriesPromise,
    ])

    const item = await mapEntry(entries.items[0], schema)
    res.status(200).json({ data : item })
  } else {
    res.status(200).json({ data : {} })
  }
}


async function mapEntry(entry : any, schema : any) {
  if (!entry) {
    return null
  }
  const { fields } = entry

  await Promise.all(
    schema.fields
      .filter(({ id } : any) => fields[id])
      .map(async ({ id, type, ...model } : any) => {
        switch (type) {
          case 'RichText':
            fields[id] = {
              html: toHtml(fields[id]),
              inlineHtml: toInlineHtml(fields[id]),
            }
            break
          case 'Link':
            fields[id] = await mapLink(fields[id], model.linkType)
            break
          case 'Array':
            fields[id] = await Promise.all(
              fields[id].map((item : any)=> mapLink(item, model.items.linkType))
            )
            break
        }
      })
  )

  return fields
}

async function mapLink(link : any, linkType : any) {
  switch (linkType) {
    case 'Asset':
      return toImg(link)
    case 'Entry':

      if (link.sys.contentType === undefined) return null
      const contentType = link.sys.contentType.sys.id
      const schema = await client.getContentType(contentType)
      return await mapEntry(link, schema)
  }
}


function toHtml(document : any) {
  return documentToHtmlString(document, getHtmlOptions())
}

function toInlineHtml(document : any) {
  return documentToHtmlString(
    document,
    getHtmlOptions({
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node : any, next : any) =>
          next(node.content).replace(/\n/g, '<br/>'),
      },
    })
  )
}

function getHtmlOptions({ renderMark = {}, renderNode = {}, ...options } = {}) {
  return {
    renderMark: {
      [MARKS.BOLD]: (text : any) => `<strong>${text}</strong>`,
      [MARKS.ITALIC]: (text : any) => `<em>${text}</em>`,
      ...renderMark,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node : any, next : any) =>
        `<p>${next(node.content).replace(/\n/g, '<br/>')}</p>`,
      ...renderNode,
    },
    ...options,
  }
}

function toImg(link : any) {
  return {
    src: link.fields.file.url,
    alt: link.fields.title,
  }
}