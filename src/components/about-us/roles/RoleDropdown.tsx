import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import classes from './RoleDropdown.module.css'

const RoleDropdown = ({ name, description, applicationOpen, applyLink }: {name:any, description:any, applicationOpen:any, applyLink:any}) => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className={classes.dropdownbanner}>
        <button className={classes.dropdownbannerbutton} onClick={() => setOpen(!open)}>
          <div className={open? classes.open : classes.icon}>
            <IoIosArrowForward />
          </div>
          <h3 className={classes.h3}>{name}</h3>
        </button>
        {applicationOpen && (
          <a className={classes.applylink} href={applyLink}>
            Apply Now
          </a>
        )}
      </div>
      {open && (
        <div className={classes.description}>
          <div dangerouslySetInnerHTML={{ __html: description.html }} />
        </div>
      )}
    </section>
  );
};

export default RoleDropdown;