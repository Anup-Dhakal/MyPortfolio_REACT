import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs"; // Bootstrap arrow icon

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <BsArrowUpShort size={24} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
