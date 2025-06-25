"use client";
import React from "react";

import Container from "./Container";

const Footer = () => {
  return (
    <Container className=" py-12 lg:py-16 bg-footer flex flex-col md:flex-row justify-between items-center text-black bg-[#e3d6c3;]">
      <div className="">
        <span className=" font-semibold">
          Copyright © 2024 - Open Home Media LLC
        </span>
      </div>
    </Container>
  );
};

export default Footer;
