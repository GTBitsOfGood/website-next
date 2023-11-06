import { useEffect, useState } from 'react';
import RoleDropdown from './RoleDropdown'; // Update the import path according to your project structure
import classes from './Department.module.css'

const RoleSection = ({ name, description, hash, image, roles, rightAlign, selectedRole }) => {
  console.log(rightAlign, hash)
  const [recruitmentCycles, setrecruitmentCycles] = useState([]);
  useEffect(() => {
    fetch('../../../../public/recruitmentCycle.json') // Path to your JSON file
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(jsonData => {
          setrecruitmentCycles(jsonData.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, []);
  // Check if role applications are open in the current recruitment cycle
  const activeCycle = recruitmentCycles.find(cycle => cycle.active);

  if (activeCycle && activeCycle.openRoles && activeCycle.openRoles.length) {
    roles = roles.map(role => {
      const applicationOpen = activeCycle.openRoles.find(
        openRole => openRole.name === role.name && openRole.learnMoreHash === hash
      );
      return { ...role, applicationOpen };
    });
  }

  return (
    <section className={rightAlign ? classes.sectionRight : classes.section} id={hash}>
      <div className={rightAlign ? classes.innerRight : classes.inner}>
        <div className={rightAlign? classes.imageContainerRight : classes.imageContainer}>
          <img className={classes.image} src={image.src} alt={image.alt} />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.headercontainer}>
            <h2 className={classes.h2}>{name}</h2>
          </div>
          <p className={classes.description} dangerouslySetInnerHTML={{ __html: description.inlineHtml }} />
          {roles.map(role => (
            <RoleDropdown key={role.name} {...role} open={selectedRole === role.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSection;