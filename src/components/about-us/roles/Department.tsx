import { useEffect, useState } from "react";
import RoleDropdown from "./RoleDropdown"; // Update the import path according to your project structure
import classes from "./Department.module.css";

interface RoleSelectionType {
  name: string;
  description: {
    html: string;
    inlineHtml: string;
  };
  hash: string;
  image: {
    src: string;
    alt: string;
  };
  roles: {
    name: string;
    briefDescription: string;
    description: {
      html: string;
      inlineHtml: string;
    };
    applyLink: string;
    learnMoreHash: string;
  }[];
  rightAlign: boolean;
}

interface RecruitmentCycleType {
  label: string;
  term: string;
  announcement: {
    html: string;
    inlineHtml: string;
  };
  tagline: {
    html: string;
    inlineHtml: string;
  };
  active: boolean;
  openRoles: {
    name: string;
    briefDescription: string;
    description: {
      html: string;
      inlineHtml: string;
    };
    applyLink: string;
    learnMoreHash: string;
  }[];
  futureRoles?: {
    name: string;
    briefDescription: string;
    description: {
      html: string;
      inlineHtml: string;
    };
    applyLink: string;
    learnMoreHash: string;
  }[];
}

function RoleSection({
  name,
  description,
  hash,
  image,
  roles,
  rightAlign,
}: RoleSelectionType) {
  console.log(rightAlign, hash);
  const [recruitmentCycles, setrecruitmentCycles] = useState<
    RecruitmentCycleType[]
  >([]);
  useEffect(() => {
    fetch("/recruitmentCycle.json") // Path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setrecruitmentCycles(jsonData.data as RecruitmentCycleType[]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // Check if role applications are open in the current recruitment cycle
  const activeCycle = recruitmentCycles.find((cycle) => cycle.active);

  if (activeCycle && activeCycle.openRoles && activeCycle.openRoles.length) {
    roles = roles.map((role) => {
      const applicationOpen = activeCycle.openRoles.find(
        (openRole) =>
          openRole.name === role.name && openRole.learnMoreHash === hash
      );
      return { ...role, applicationOpen };
    });
  }

  return (
    <section
      className={rightAlign ? classes.sectionRight : classes.section}
      id={hash}
    >
      <div className={rightAlign ? classes.innerRight : classes.inner}>
        <div
          className={
            rightAlign ? classes.imageContainerRight : classes.imageContainer
          }
        >
          <img className={classes.image} src={image.src} alt={image.alt} />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.headercontainer}>
            <h2 className={classes.h2}>{name}</h2>
          </div>
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description.inlineHtml }}
          />
          {roles.map((role) => (
            <RoleDropdown
              key={role.name}
              {...role}

              // open={selectedRole === role.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoleSection;
