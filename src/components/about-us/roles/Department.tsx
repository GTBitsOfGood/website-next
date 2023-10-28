import React from 'react';
import RoleDropdown from './RoleDropdown'; // Update the import path according to your project structure
import recruitmentCycles from '@contentful-entries/recruitmentCycle';

const RoleSection = ({ name, description, hash, image, roles, rightAlign, selectedRole }) => {
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
    <section className={rightAlign ? 'rightAlign' : ''} id={hash}>
      <div className="inner">
        <div className="image-container">
          <img src={image.src} alt={image.alt} />
        </div>
        <div className="content-container">
          <div className="header-container">
            <h2>{name}</h2>
          </div>
          <p className="description" dangerouslySetInnerHTML={{ __html: description.inlineHtml }} />
          {roles.map(role => (
            <RoleDropdown key={role.name} {...role} open={selectedRole === role.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSection;