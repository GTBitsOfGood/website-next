import { MissionCard } from '@/types';
import styles from "@/styles/Mission.module.css";
export type MissionSectionProps = {
    id: string,
    missionCards: MissionCard[],
};

const MissionSection = ({ id, missionCards }: MissionSectionProps) => {
    return (
        <section className={styles.missionsection} id={id}>
            <h2 className={styles.missionh2}>Our Mission</h2>
            {missionCards.map((missionCard: MissionCard) => (
                <div className={styles.mission}>
                    <img className={styles.missionimg} src={missionCard.aboutUsImage.src} alt={missionCard.aboutUsImage.alt} />
                    <h3 className={styles.missionh3}>{missionCard.heading}</h3>
                    <p className={styles.missionp}> {missionCard.description.inlineHtml} </p>
                </div>
            ))}
        </section>
    );
}

export default MissionSection;