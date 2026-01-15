'use client';

import { useState, useEffect } from "react";

const GoToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  // Hiện nút khi scroll xuống
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

  // Scroll lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} className="go-to-top">
          ↑
        </button>
      )}
    </>
  );
};

export default GoToTop;
