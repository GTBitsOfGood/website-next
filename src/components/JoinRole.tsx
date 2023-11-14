import styles from "@/styles/JoinRole.module.css";
export type JoinRoleProps = {
    name: string,
    briefDescription: string,
    applyLink: string,
    learnMoreHash: string,
    open: boolean,
};

const JoinRole = ({name, briefDescription, applyLink, learnMoreHash, open}: JoinRoleProps) => {
    return (
        <div className={styles.container}>
            <h4 className={styles.containerh4}>{name}</h4>
            <p className={styles.containerp}>{briefDescription}</p>
            <div>
                {open && (
                    <a className={styles.abtnfilled} target="_blank" href={applyLink} style={{color: "white"}}>Apply</a>
                )}
                <a className={styles.abtnhollow} href={`/about/roles?role=${name}#${learnMoreHash}`}>
                    Learn more
                </a>
            </div>
        </div>
    )
}

export default JoinRole;