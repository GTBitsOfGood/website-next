import styles from "@/styles/PageHeader.module.css";

export type PageHeaderProps = {
    ctaScrollToId: string,
    headerData: {
        cta: string,
        heading: string,
        image: {
            src: string,
            alt: string,
        },
        description: {
            html: string,
            inlineHtml: string,
        }
    }
};

const PageHeader = ({ctaScrollToId, headerData }: PageHeaderProps) => {

    const scrollTo = () => {
        const element = document.getElementById(ctaScrollToId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className={styles.section}>
            <svg
                className={styles.svg}
                width="1440"
                height="700"
                viewBox="0 0 1440 832"
                fill="var(--primary)"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1442 0H0V709.5C77.5 868.5 397.5 874.793 719.5 709.5C869.5 632.5 1247
                    477.5 1442 654V0Z"
                    fill="url(#header-swoosh)" 
                />
                <defs>
                    <linearGradient
                        id="header-swoosh"
                        x1="-0.499977"
                        y1="123"
                        x2="1441.5"
                        y2="189.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF795B" />
                        <stop offset="1" stopColor="#FEE76C" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={styles.contentcontainer}>
                <div className={styles.textcontainer}>
                    <h1>{headerData && headerData.heading}</h1>
                    <p>
                        {headerData && headerData.description.inlineHtml}
                    </p>
                    {headerData && headerData.cta && ctaScrollToId && (
                        <button className={styles.button} onClick={scrollTo}>{headerData.cta}</button>
                    )}
                </div>
                <img className={styles.img} src={headerData && headerData.image.src} alt={headerData && headerData.image.alt} />
            </div>
        </section>
    );
}

export default PageHeader;