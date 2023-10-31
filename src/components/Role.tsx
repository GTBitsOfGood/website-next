import styles from "@/styles/Role.module.css";

export type RoleProps = {
    name: string,
    image: {
        src: string,
        alt: string,
    },
    briefDescription: {
        html: string,
        inlineHtml: string,
    }
};

const Role = ({ name, image, briefDescription }: RoleProps) => {
    return (
        <div>
            <a href="/roles" className={styles.container}>
                <div className={styles.cutoff}>
                    <img className={styles.img} src={image.src} alt={image.alt} />
                </div>
                <h3 className={styles.h3}>{name}</h3>
                <p className={styles.p} dangerouslySetInnerHTML={{ __html: briefDescription.inlineHtml }} />
                <div className={styles.learnmore}>Learn More</div>
            </a>
        </div>
    );
}

export default Role;