import {useState} from "react";
import { Milestone } from '@/types';
import MilestoneFlagIcon from '@/components/MilestoneFlagIcon';
import ArrowIcon from "./ArrowIcon";
import styles from "@/styles/Milestone.module.css";
export type MilestoneSectionProps = {
    milestones: Milestone[],
};

const MissionSection = ({ milestones }: MilestoneSectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const milestoneLength = milestones.length;

    const prev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };
    
    const next = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className={styles.overflowContainerColoredBacking}>
            <section className={styles.section}>
                <h2 className={styles.h2}>Milestones</h2>
                <div
                    className={styles.scrollcontainer}
                    style={{left: -1*currentIndex*300, width: 300*(milestoneLength - 1)}}
                >
                    {milestones.map((milestone, index) => (
                        <div
                        key={index}
                        className={` ${
                            currentIndex === index ? styles.milestoneselected : ''} ${
                            currentIndex !== index && index % 4 === 1 ? styles.milestonepositionlow : ''} ${
                            currentIndex !== index && index % 4 === 3 ? styles.milestonepositionhigh : ''} ${
                            currentIndex !== index && (index % 4 === 0 || index % 4 === 2) ? styles.milestone : ''} `}
                        >
                            <div className={` ${currentIndex === index ? '' : styles.milestonecontent }`}>
                                <div className={styles.headingcontainer}>
                                    {currentIndex === index && (
                                        <button className={styles.button} onClick={prev}>
                                            <ArrowIcon fill="var(--text-color)" orientation={1} />
                                        </button>
                                    )}
                                    <h4 className={`${
                                        index % 4 === 0 ? styles.h4yellow : ''} ${
                                        index % 4 === 2 ? styles.h4red : ''} ${
                                        index % 4 !== 2 && index % 4 !== 0 ? styles.h4 : ''}`}
                                    >
                                        <MilestoneFlagIcon />
                                        <span className={`${
                                        index % 4 === 0 ? styles.h4yellowtimebanner : ''} ${
                                        index % 4 === 2 ? styles.h4redtimebanner : ''} ${
                                        index % 4 !== 2 && index % 4 !== 0 ? styles.timebanner : ''}`}
                                        >
                                            {milestone.time}
                                        </span>
                                    </h4>
                                    {currentIndex === index && (
                                        <button className={styles.button} onClick={next}>
                                            <ArrowIcon fill="var(--text-color)" />
                                        </button>
                                    )}
                                </div>
                                <h3 className={styles.h3}>{milestone.heading}</h3>
                                {currentIndex === index && (
                                    <p dangerouslySetInnerHTML={{ __html: milestone.description.inlineHtml }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MissionSection;