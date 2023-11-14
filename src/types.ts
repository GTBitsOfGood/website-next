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

export interface JoinRoleData {
    name: string,
    briefDescription: string,
    description: {
        html: string,
        inlineHtml: string,
    },
    applyLink: string,
    learnMoreHash: string,
}

export interface JoinData {
    term: string,
    announcement: {
        html: string,
        inlineHtml: string,
    },
    tagline: {
        html: string,
        inlineHtml: string,
    },
    openRoles: JoinRoleData[],
    futureRoles: JoinRoleData[],
}

export interface JoinContentData {
    nonprofitTagline: {
        html: string,
        inlineHtml: string,
    },
    nonprofitSection: {
        html: string,
        inlineHtml: string,
    },
    nonprofitCtaUrl: string,
    nonprofitCta: string,
    headingImageRight: {
        src: string,
        alt: string,
    },
    headingImageLeft: {
        src: string,
        alt: string,
    },
    footerText: {
        html: string,
        inlineHtml: string,
    },
    newsletterUrl: string,
    newsletterCta: string,
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
