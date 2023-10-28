import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import GetInvolvedBtn from './GetInvolvedBtn'; // Assuming you've converted this to React
import MenuIcon from './MenuIcon'; // Assuming you've converted this to React
// ... other imports ...

export default function Nav({ segment }) {
  const [scrolled, setScrolled] = useState(true);
  const [mobileNavToggled, setMobileNavToggled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMobileNavToggled(false);
  }, [router.asPath]);

  return (
    <nav className={scrolled ? styles.shadow : ''}>
      <ul className={mobileNavToggled ? styles.mobileNavToggled : ''}>
        <div className={styles.mobileWrapper}>
          <li>
            <a className={router.asPath === '/' ? styles.selected : ''} href="/">Home</a>
          </li>
          {/* ... other links ... */}
        </div>
      </ul>
      <div className={styles.mobileContent}>
        <GetInvolvedBtn small />
        <button
          className={styles.mobileDropdownToggle}
          onClick={() => setMobileNavToggled(!mobileNavToggled)}>
          <MenuIcon menuToggled={mobileNavToggled} />
        </button>
      </div>
    </nav>
  );
}
