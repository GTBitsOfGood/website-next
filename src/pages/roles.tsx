import { useState, useEffect } from "react";
import classes from "../styles/Roles.module.css";
import Department from "../components/about-us/roles/Department";

interface DepartmentData {
  name: string;
  briefDescription: {
    html: string;
    inlineHtml: string;
  };
  description: {
    html: "<p>The design team consists of product designers, design bootcampers, and design executive roles. Product designers work on nonprofit project teams with PMs and engineers, identifying design needs and creating lofi-to-hifi mockups. Our design bootcampers go through a one-semester product design course that broadly covers the end-to-end research and design process.</p>";
    inlineHtml: "The design team consists of product designers, design bootcampers, and design executive roles. Product designers work on nonprofit project teams with PMs and engineers, identifying design needs and creating lofi-to-hifi mockups. Our design bootcampers go through a one-semester product design course that broadly covers the end-to-end research and design process.";
  };
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
  hash: string;
}

interface HeaderContent {
  desktopBannerImages: {
    src: string;
    alt: string;
  }[];
  mobileBannerImages: {
    src: string;
    alt: string;
  }[];
  title: string;
  tagline: string;
}

const RolesPage = () => {
  const [departments, setdepartments] = useState<DepartmentData[]>();
  const [headerContent, setheaderContent] = useState<HeaderContent[]>();
  useEffect(() => {
    fetch("/roleDepartment.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setdepartments(jsonData.data as DepartmentData[]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("/rolesHeader.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setheaderContent(jsonData.data as HeaderContent[]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    if (location.hash) {
      scrollToDepartment(location.hash.slice(1));
    }
  }, []);

  const scrollToDepartment = (id: string) => {
    const section = document.getElementById(id) as HTMLElement;
    setTimeout(() => {
      if (section)
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    }, 0);
  };

  return (
    <div className={classes.heading}>
      {headerContent && (
        <section className={classes.banner}>
          <div className={classes.headcontainer}>
            <h1 className={classes.h1}>{headerContent[0].title}</h1>
            <p className={classes.bannerP}>{headerContent[0].tagline}</p>
          </div>

          <img
            className={classes.imageLeft}
            src={headerContent[0].desktopBannerImages[0].src}
            alt={headerContent[0].desktopBannerImages[0].alt}
          />
          <img
            className={classes.mobileimageLeft}
            src={headerContent[0].mobileBannerImages[0].src}
            alt={headerContent[0].mobileBannerImages[0].alt}
          />
          <img
            className={classes.imageRight}
            src={headerContent[0].desktopBannerImages[1].src}
            alt={headerContent[0].desktopBannerImages[1].alt}
          />
          <img
            className={classes.mobileimageRight}
            src={headerContent[0].mobileBannerImages[1].src}
            alt={headerContent[0].mobileBannerImages[1].alt}
          />
        </section>
      )}
      {departments && (
        <section className={classes.linksContainer}>
          <p className={classes.linksContainerP}>
            We offer {departments.length} unique roles
          </p>
          <div className={classes.deptlinks}>
            {departments.map(({ image, name, hash }) => (
              <button
                className={classes.deptlinksbutton}
                key={hash}
                onClick={() => scrollToDepartment(hash)}
              >
                <img
                  className={classes.deptlinksimg}
                  src={image.src}
                  alt={image.alt}
                />
                <p className={classes.deptlinksp}>{name}</p>
              </button>
            ))}
          </div>
        </section>
      )}
      {departments &&
        departments.map((department, index) => (
          <Department
            rightAlign={index % 2 === 1}
            key={department.hash}
            {...department}
          />
        ))}
    </div>
  );
};

export default RolesPage;
