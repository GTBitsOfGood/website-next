import styles from "@/styles/JoinFooter.module.css";
export type JoinFooterProps = {
    
    footerText: {
        html: string,
        inlineHtml: string,
    },
    newsletterUrl: string,
    newsletterCta: string,
    headingImageLeft: {
        src: string,
        alt: string,
    },
    headingImageRight: {
        src: string,
        alt: string,
    }
    
};
const JoinFooter = ({footerText, newsletterUrl, newsletterCta, headingImageLeft, headingImageRight}: JoinFooterProps) => {
    return (
        <div>
            <section className={styles.section}>
                <svg
                    className={styles.sectionsvgsquaresicon}
                    width="50"
                    height="60"
                    viewBox="0 0 50 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1.80618"
                        y="31.5"
                        width="25.8926"
                        height="25.8926"
                        transform="rotate(4 1.80618 31.5)"
                        fill="#FF8988" 
                    />
                    <rect
                        x="33.9332"
                        y="0.21582"
                        width="17.4544"
                        height="17.4544"
                        transform="rotate(23 33.9332 0.21582)"
                        fill="#FFB55E" 
                    />
                </svg>
                <p dangerouslySetInnerHTML={footerText && { __html: footerText.html }} />
                <a className={styles.anewsletter} href={newsletterUrl && newsletterUrl}>{newsletterCta && newsletterCta}</a>

                <img
                    className={styles.imgbackingimageleft}
                    src={headingImageLeft && headingImageLeft.src}
                    alt={headingImageLeft && headingImageLeft.alt} 
                />
                <img
                    className={styles.imgbackingimageright}
                    src={headingImageRight && headingImageRight.src}
                    alt={headingImageRight && headingImageRight.alt} 
                />
            </section>

            <svg
                className={styles.svgbottomswoosh}
                width="1440"
                height="274"
                viewBox="0 0 1440 274"
                fill="var(--primary)"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-1 274H1439.5V22C1298.5 -19.5 994 1.5 710 66.5C554.26 102.145 197.066
                    111.732 -1 1.5V274Z"
                    fill="url(#paint0_linear)" 
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="1447.51"
                        y1="412.181"
                        x2="-12.067"
                        y2="302.711"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF8A89" />
                        <stop offset="1" stopColor="#FEC96C" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default JoinFooter;