import { useEffect, useState } from "react";
import { MissionCard, Milestone, RoleDepartment, HeaderData } from "@/types";
import PageHeader from "@/components/PageHeader";
import MissionSection from "@/components/MissionSection";
import Slogan from "@/components/Slogan";
import MilestonesSection from "@/components/MilestonesSection";
import RolesSection from "@/components/RolesSection";
import Layout from "@/components/layout/layout";

export default function About() {
  const [missionCards, setMissionCards] = useState<MissionCard[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [roleDepartments, setRoleDepartments] = useState<RoleDepartment[]>([]);
  const [aboutData, setAboutData] = useState<HeaderData[]>([]);

  useEffect(() => {
    fetch("/aboutUsHeader.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setAboutData(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    fetch("/missionSection.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setMissionCards(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    fetch("/milestone.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setMilestones(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    fetch("/roleDepartment.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setRoleDepartments(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Layout>
      <div>
        <PageHeader ctaScrollToId="mission-section" headerData={aboutData[0]} />
        <MissionSection id={"mission-section"} missionCards={missionCards} />
        <Slogan />
        <MilestonesSection milestones={milestones} />
        <RolesSection roleDepartments={roleDepartments} />
      </div>
    </Layout>
  );
}
