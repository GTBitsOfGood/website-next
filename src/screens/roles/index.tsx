import { useState, useEffect } from 'react';
import classes from './Role.module.css';
import Department from '../../components/about-us/roles/Department';
// import departments from '@contentful-entries/roleDepartment';
// import headerContent from '@contentful-entry/rolesHeader';

const RolesPage = () => {
  const [departments, setdepartments] = useState(null);
  const [headerContent, setheaderContent] = useState(null);
  useEffect(() => {
    fetch('/roleDepartment.json') // Path to your JSON file
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(jsonData => {
          setdepartments(jsonData.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        fetch('/rolesHeader.json') // Path to your JSON file
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(jsonData => {
          setheaderContent(jsonData.data);
          console.log(jsonData.data)
          console.log(headerContent)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

    if (location.hash) {
      scrollToDepartment(location.hash.slice(1));
    }
  }, []);

  const scrollToDepartment = (id: string) => {
    const section = document.getElementById(id) as HTMLElement;
    setTimeout(() => {
      if (section) section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",});
    }, 0);
  };

  return (
    <div className={classes.heading}>
      {headerContent && 
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
    }
    {departments && 
      <section className={classes.linksContainer}>
        <p className={classes.linksContainerP}>We offer {departments.length} unique roles</p>
        <div className={classes.deptlinks}>
          {departments.map(({ image, name, hash }) => (
            <button className= {classes.deptlinksbutton} key={hash} onClick={() => scrollToDepartment(hash)}>
              <img className={classes.deptlinksimg} src={image.src} alt={image.alt} />
              <p className={classes.deptlinksp}>{name}</p>
            </button>
          ))}
        </div>
      </section>
    }
      
    </div>
  );
};

export default RolesPage;