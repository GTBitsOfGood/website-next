import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const RoleDropdown = ({ name, description, applicationOpen, applyLink }: {name:any, description:any, applicationOpen:any, applyLink:any}) => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="dropdown-banner">
        <button onClick={() => setOpen(!open)}>
          <div className={`icon ${open ? 'open' : ''}`}>
            <IoIosArrowForward />
          </div>
          <h3>{name}</h3>
        </button>
        {applicationOpen && (
          <a className="apply-link" href={applyLink}>
            Apply Now
          </a>
        )}
      </div>
      {open && (
        <div className="description">
          <div dangerouslySetInnerHTML={{ __html: description.html }} />
        </div>
      )}
    </section>
  );
};

export default RoleDropdown;