import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

import { useEffect, useState } from "react";

export default function Layout({ children, segment }: any) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer noTopMargin={segment === "join"} />
    </>
  );
}
