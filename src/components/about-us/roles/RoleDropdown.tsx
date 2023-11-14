import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import classes from "./RoleDropdown.module.css";

interface RoleDropDownType {
  name: string;
  description: {
    html: string;
    inlineHtml: string;
  };
  // applicationOpen: boolean;
  applyLink: string;
}

const RoleDropdown = ({
  name,
  description,
  // applicationOpen,
  applyLink,
}: RoleDropDownType) => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className={classes.dropdownbanner}>
        <button
          className={classes.dropdownbannerbutton}
          onClick={() => setOpen(!open)}
        >
          <div className={open ? classes.open : classes.icon}>
            <IoIosArrowForward />
          </div>
          <h3 className={classes.h3}>{name}</h3>
        </button>
        {/* {applicationOpen && (
          <a className={classes.applylink} href={applyLink}>
            Apply Now
          </a>
        )} */}
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
