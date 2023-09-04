"use client";
import React, { useEffect, useState } from "react";

function Resume() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(!isScrolled);
      } else {
        setIsScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`w-full sticky top-0 z-[1] p-2 bg-black text-white  ${
          isScrolled ? "shadow-lg" : ""
        } text-center`}
      >
        My Resume
      </header>
      <iframe
        src="https://drive.google.com/file/d/1VeIAkuinvV9DkB9cm8RkuY2RgVOmdiN8/preview"
        className="w-full"
        height="1000"
      ></iframe>
    </div>
  );
}

export default Resume;
