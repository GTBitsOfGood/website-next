export interface HeaderData {
    heading: string,
    description: {
        html: string,
        inlineHtml: string,
    },
    cta: string,
    image: {
        src: string,
        alt: string,
    }
}

export interface MissionCard {
    key: string,
    heading: string,
    description: {
        html: string,
        inlineHtml: string,
    },
    aboutUsImage: {
        src: string,
        alt: string,
    }
}

export interface Milestone {
    key: string,
    heading: string,
    description: {
        html: string,
        inlineHtml: string,
    },
    time: string,
}

export interface RoleDepartment {
    name: string,
    image: {
        src: string,
        alt: string,
    },
    briefDescription: {
        html: string,
        inlineHtml: string,
    },

}
