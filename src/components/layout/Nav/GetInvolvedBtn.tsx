import React from "react";
import Link from "next/link";
import styles from "../../../styles/GetInvolvedBtn.module.css";

interface Props {
  large?: boolean;
  small?: boolean;
  hide?: boolean;
}

const GetInvolvedBtn = (props: Props) => {
  const { small = false, large = false, hide = false } = props;
  const buttonClasses = ["cta-button"];

  if (large) {
    buttonClasses.push("large");
  }

  if (small) {
    buttonClasses.push("small");
  }

  if (hide) {
    buttonClasses.push("hide");
  }

  return (
    <Link href="/join" className={styles.small}>
      Get Involved
    </Link>
  );
};

export default GetInvolvedBtn;
