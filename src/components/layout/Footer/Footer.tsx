import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer({ noTopMargin = false }) {
  const [content, setContent] = useState<any>(null);
  const [columns, setColumns] = useState<any>(null);

  useEffect(() => {
    fetch("/footer.json").then((resp: any) => {
      resp.json().then((data: any) => {
        console.log(data);
        setContent(data.data[0]);

        const tempColumns = Object.keys(data.data[0])
          .map((key) => /^linksColumn([0-9]+)$/.exec(key))
          .filter((match) => match)
          .map(([_, columnNum]: any) => columnNum)
          .sort((x, y) => parseInt(x) - parseInt(y))
          .map((columnNum) => ({
            title: data.data[0][`titleColumn${columnNum}`],
            links: data.data[0][`linksColumn${columnNum}`],
          }));

        console.log(tempColumns)

        setColumns(tempColumns);
      });
    });
  }, []);

  return (
    content && columns && (
      <footer
        id="footer"
        className={noTopMargin ? styles.noTopMargin : styles.footer}
      >
        <section className={styles.section}>
          <div className={styles.ctaContainer}>
            <h3 className={styles.h3}>{content.ctaHeader}</h3>
            <p className={styles.footerCta}>
              <a href={content.cta.url} className={styles.link}>{content.cta.text}</a>
            </p>
          </div>

          <div className={styles.linkContainer}>
            {columns.map((column: any) => (
              <ul key={column.title} className={styles.ul}>
                <h3 className={styles.columnHeader}>{column.title}</h3>
                {column.links.map((link: any) => (
                  <li key={link.url} className={styles.li}>
                    <a href={link.url} className={styles.link}>{link.text}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <div className={styles.footerBottom}>
          <a href={content.hack4impactLink.url} className={styles.link}>
            <img
              src={content.hack4impactLink.image.src}
              alt={content.hack4impactLink.image.alt}
            />
          </a>
          <div className={styles.footerContainer}>
            <a href="https://www.netlify.com" className={styles.link}>
              <img
                src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
                alt="Deploys by Netlify"
              />
            </a>
            <a href={content.bitsOfGoodHomeLink.url} className={styles.link}>
              <img
                src={content.bitsOfGoodHomeLink.image.src}
                alt={content.bitsOfGoodHomeLink.image.alt}
              />
            </a>
          </div>
        </div>
      </footer>
    )
  );
}
