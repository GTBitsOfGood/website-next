import styles from "@/styles/JoinHeading.module.css";
export type JoinHeadingProps = {
    currentTerm: string,
    headingImageLeft: {
        src: string,
        alt: string,
    },
    headingImageRight: {
        src: string,
        alt: string,
    }
};

const JoinHeading = ({currentTerm, headingImageLeft, headingImageRight}: JoinHeadingProps) => {
    return (
        <section className={styles.section}>
            <hgroup className={styles.hgroup}>
                <h1 className={styles.hgrouph1}>Join Us!</h1>
                <h2 className={styles.hgrouph2}>{currentTerm || 'Spring 2021'}</h2>
            </hgroup>

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

            <svg
                className={styles.svgmobilevectorsleft}
                width="106"
                height="57"
                viewBox="0 0 106 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M105.111 42C90.697 52.221 52.9751 67.113 17.3976 44.913C13.0031 43.0221
                    2.14003 40.3749 -6.1567 44.913C-8.26604 45.884 -13.1878 47.2434 -16.0003
                    44.913"
                    stroke="#FFD528" 
                />
                <rect
                    x="44.7041"
                    width="25.012"
                    height="25.012"
                    transform="rotate(81 44.7041 0)"
                    fill="#FFAE79" 
                />
            </svg>

            <svg
                className={styles.svgmobilevectorsright}
                width="101"
                height="67"
                viewBox="0 0 101 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.622681 30.6667C15.0365 40.8878 52.7585 55.7798 88.336
                    33.5797C92.7304 31.6888 103.593 29.0416 111.89 33.5797C114 34.5507 118.921
                    35.9101 121.734 33.5797"
                    stroke="#FFD528" 
                />
                <rect
                    x="40.1143"
                    y="0.188232"
                    width="15.9734"
                    height="15.9734"
                    transform="rotate(4 40.1143 0.188232)"
                    fill="#FF8988" 
                />
                <rect
                    x="71.2296"
                    y="52.7039"
                    width="10.629"
                    height="10.629"
                    transform="rotate(23 71.2296 52.7039)"
                    fill="#FFB55E" 
                />
            </svg>

            <svg
                className={styles.svgbottomswooshoverlay}
                width="1440"
                height="255"
                viewBox="0 0 1440 255"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1440 255H0V0C77.5 109.112 392 214.819 714 101.388C864 48.5474 1245
                    6.87843 1440 128V255Z"
                    fill="white" 
                />
            </svg>
        </section>
    );
}

export default JoinHeading;