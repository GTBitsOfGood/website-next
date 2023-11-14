// import PageHeader from "../../components/PageHeader";
// import Project from "../../components/projects/index/Project";
// import content from '@contentful-entry/projectLanding'
import Project from "@/components/Project";
import styles from "../styles/Projects.module.css";
import React, { useEffect, useState } from "react";
// import PageHeader from "@/components/PageHeader";
// import Navbar from "@/components/nav";

const Projects = () => {
  const [content, setContent] = useState<any>(null);
  const [currProjects, setCurrProjects] = useState<any>([]);
  const [pastProjects, setPastProjects] = useState<any>([]);

  useEffect(() => {
    fetch("/projectLanding.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const data = jsonData.data[0];
        setContent(data);

        //sort projects
        const updateCurr = [];
        const updatePast = [];
        for (const project of data.projects) {
          if (project.semester == data.currentSemester) {
            updateCurr.push(project);
          } else {
            updatePast.push(project);
          }
        }
        setCurrProjects(updateCurr);
        setPastProjects(updatePast);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* <PageHeader {...content} /> */}
      <section>
        <h2>Current Projects</h2>
        <div className={styles.projectsContainer}>
          {currProjects.map(({ name, briefDescription, key, thumbnail } : any) => (
            <Project
              key={key}
              name={name}
              link={"/projects/" + key}
              image={thumbnail}
              briefDescription={briefDescription}
            />
          ))}
        </div>
        <h2>Past Projects</h2>
        <div className={styles.projectsContainer}>
          {pastProjects.map(({ name, briefDescription, key, thumbnail } : any) => (
            <Project
              key={key}
              name={name}
              link={"/projects/" + key}
              image={thumbnail}
              briefDescription={briefDescription}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
