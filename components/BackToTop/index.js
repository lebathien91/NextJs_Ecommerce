import { useState, useEffect, memo } from "react";
import styles from "./BackToTop.module.css";
const BackToTop = () => {
  const [show, setShow] = useState(false);
  const handleScroll = () => {
    setShow(window.scrollY >= 300);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {show && (
        <div className={styles.BackToTop} onClick={scrollToTop}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M2.6 13.4l2.8 2.8 8.6-8.6v24.4h4v-24.4l8.6 8.6 2.8-2.8-13.4-13.4-13.4 13.4z"></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default memo(BackToTop);
