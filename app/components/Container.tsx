"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Optional className prop
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  // Combine provided className with default classes
  const containerClass = ` max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ${
    className || ""
  }`;

  return <div className={containerClass}>{children}</div>;
};
export default Container;
