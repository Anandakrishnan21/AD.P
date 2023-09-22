"use client";
import React, { useEffect, useState } from "react";

function Resume() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        src="https://drive.google.com/file/d/1x3uO8u-crQX7FL1Eoydid4P4iOdkJU9d/preview"
        className="w-full"
        height="1000"
      ></iframe>
    </div>
  );
}

export default Resume;
