import { useEffect } from 'react';
import classes from '@/styles/role.module.css';
import Department from '../../components/about-us/roles/Department';
import departments from '@contentful-entries/roleDepartment';
import headerContent from '@contentful-entry/rolesHeader';

const RolesPage = () => {
  useEffect(() => {
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
      <section className={classes.banner}>
        <h1>{headerContent.title}</h1>
        <p>{headerContent.tagline}</p>

        <img
          className="desktop left"
          src={headerContent.desktopBannerImages[0].src}
          alt={headerContent.desktopBannerImages[0].alt}
        />
        <img
          className="mobile left"
          src={headerContent.mobileBannerImages[0].src}
          alt={headerContent.mobileBannerImages[0].alt}
        />
        <img
          className="desktop right"
          src={headerContent.desktopBannerImages[1].src}
          alt={headerContent.desktopBannerImages[1].alt}
        />
        <img
          className="mobile right"
          src={headerContent.mobileBannerImages[1].src}
          alt={headerContent.mobileBannerImages[1].alt}
        />
      </section>
      <section className="dept-links-container">
        <p>We offer {departments.length} unique roles</p>
        <div className="dept-links">
          {departments.map(({ image, name, hash }) => (
            <button key={hash} onClick={() => scrollToDepartment(hash)}>
              <img src={image.src} alt={image.alt} />
              <p>{name}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RolesPage;