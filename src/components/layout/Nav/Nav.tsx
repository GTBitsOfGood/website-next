import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GetInvolvedBtn from "./GetInvolvedBtn"; // Assuming you've converted this to React
import MenuIcon from "./MenuIcon"; // Assuming you've converted this to React
import styles from "./Nav.module.css";
// ... other imports ...

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavToggled, setMobileNavToggled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMobileNavToggled(false);
  }, [router.asPath]);

  return (
    <nav className={scrolled ? styles.shadow : styles.navbar}>
      <ul className={mobileNavToggled ? styles.mobileNavToggled : styles.ul}>
        {/* <div className={styles.mobileWrapper}> */}
        <li className={styles.li}>
          <a
            className={router.asPath === "/" ? styles.selected : styles.a}
            href="/"
          >
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={router.asPath === "/about" ? styles.selected : styles.a}
            href="/"
          >
            About Us
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={router.asPath === "/roles" ? styles.selected : styles.a}
            href="/"
          >
            Roles
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={
              router.asPath === "/projects" ? styles.selected : styles.a
            }
            href="/"
          >
            Projects
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={router.asPath === "/blog" ? styles.selected : styles.a}
            href="/"
          >
            Blog
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={
              router.asPath === "/contact" ? styles.selected : styles.a
            }
            href="/"
          >
            Contact Us
          </a>
        </li>
        <li className={styles.li}>
          <GetInvolvedBtn className="get-involved-btn" small />
        </li>
        {/* </div> */}
      </ul>
      {/* <div className={styles.mobileContent}>
        <GetInvolvedBtn small />
        <button
          className={styles.mobileDropdownToggle}
          onClick={() => setMobileNavToggled(!mobileNavToggled)}
        >
          <MenuIcon menuToggled={mobileNavToggled} />
        </button>
      </div> */}
    </nav>
  );
}
