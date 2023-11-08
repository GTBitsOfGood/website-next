import React from "react";

const MenuIcon = ({ menuToggled }) => {
  const containerClasses = ["container"];

  if (menuToggled) {
    containerClasses.push("menuToggled");
  }

  return (
    <div className={containerClasses.join(" ")}>
      <div className="stripe-top" />
      <div className="stripe-middle" />
      <div className="stripe-bottom" />
    </div>
  );
};

export default MenuIcon;
