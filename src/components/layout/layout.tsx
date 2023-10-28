import Footer from './Footer/Footer';

import { useEffect, useState } from 'react';

export default function Layout({ children, segment } : any) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <main>{children}</main>
      <Footer noTopMargin={segment === 'join'} />
    </>
  );
}