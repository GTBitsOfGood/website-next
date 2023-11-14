import { useEffect, useState } from "react";
import { JoinData, JoinContentData } from "@/types";
import JoinRole from "@/components/JoinRole";
import JoinHeading from "@/components/JoinHeading";
import JoinFooter from "@/components/JoinFooter";
import styles from "@/styles/Join.module.css";
import Layout from "@/components/layout/layout";

export default function Join() {
  const [activeCycles, setActiveCycles] = useState<JoinData[]>([]);
  const [content, setContent] = useState<JoinContentData[]>([]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch("/recruitmentCycle.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setActiveCycles(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    fetch("/joinPage.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setContent(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Layout>
      <JoinHeading
        currentTerm={activeCycles[0] && activeCycles[0].term}
        headingImageLeft={content[0] && content[0].headingImageLeft}
        headingImageRight={content[0] && content[0].headingImageRight}
      />
      <div className={styles.divjumptosectionlinks}>
        <button
          className={styles.divjumptosectionlinksbuttonstudents}
          onClick={() => scrollToSection("students")}
        >
          For Students
        </button>
        <button
          className={styles.divjumptosectionlinksbuttonnonprofits}
          onClick={() => scrollToSection("nonprofits")}
        >
          For Nonprofits
        </button>
      </div>
      <section className={styles.sectioncontentcontainer}>
        <section className={styles.sectioncontentstudents} id="students">
          <h2 className={styles.sectioncontentstudentsh2}>Students</h2>
          {activeCycles[0] && activeCycles[0].announcement && (
            <div className={styles.sectioncontentannouncementcontainer}>
              <p
                className={
                  styles.sectioncontentannouncementcontainerpannouncement
                }
              >
                {activeCycles[0] && activeCycles[0].announcement.inlineHtml}
              </p>
            </div>
          )}
          <p
            className={styles.sectioncontentptagline}
            dangerouslySetInnerHTML={
              activeCycles[0] && { __html: activeCycles[0].tagline.html }
            }
          />

          {activeCycles[0] && activeCycles[0].openRoles && (
            <h3 className={styles.sectioncontenth3}>Open roles</h3>
          )}
          {activeCycles[0] &&
            activeCycles[0].openRoles &&
            activeCycles[0].openRoles.map((role) => (
              <JoinRole
                name={role.name}
                briefDescription={role.briefDescription}
                applyLink={role.applyLink}
                learnMoreHash={role.learnMoreHash}
                open={true}
              />
            ))}

          <h3 className={styles.sectioncontenth3}>Future roles</h3>
          {activeCycles[0] &&
            activeCycles[0].futureRoles &&
            activeCycles[0].futureRoles.map((role) => (
              <JoinRole
                name={role.name}
                briefDescription={role.briefDescription}
                applyLink={role.applyLink}
                learnMoreHash={role.learnMoreHash}
                open={false}
              />
            ))}
        </section>
        <section className={styles.sectioncontentnonprofits} id="nonprofits">
          <h2 className={styles.sectioncontentnonprofitsh2}>Nonprofits</h2>
          <p className={styles.sectioncontentptagline}>
            {content[0] && content[0].nonprofitTagline.inlineHtml}
          </p>
          <p
            dangerouslySetInnerHTML={
              content[0] && { __html: content[0].nonprofitSection.html }
            }
          />

          <a
            className={styles.anonprofitcta}
            href={content[0] && content[0].nonprofitCtaUrl}
            style={{ color: "black" }}
          >
            {content[0] && content[0].nonprofitCta}
          </a>
        </section>
      </section>
      <JoinFooter
        footerText={content[0] && content[0].footerText}
        newsletterUrl={content[0] && content[0].newsletterUrl}
        newsletterCta={content[0] && content[0].newsletterCta}
        headingImageLeft={content[0] && content[0].headingImageLeft}
        headingImageRight={content[0] && content[0].headingImageRight}
      />

    </Layout>
  );
}
