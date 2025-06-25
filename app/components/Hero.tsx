"use client";
import React from "react";
import Image from "next/image";
import Container from "./Container";

const Hero: React.FC = () => {
  return (
    <Container className="pt-12 pb-12 bg-[#e3d6c3;]">
      {/* Main Split Section */}
      <div className=" flex flex-col lg:flex-row items-center gap-12 ">
        {/* Text & CTA Section */}
        <section className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Media that Sells Homes Faster.
          </h1>
          <p className="text-lg md:text-xl text-black">
            Boost your listings with fast, reliable media. Schedule your shoot
            in just a few clicks.
          </p>

          {/* Button wrapper */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() =>
                window.open("https://openhomemedia.hd.pics/order", "_blank")
              }
              className="bg-black hover:cursor-pointer hover:bg-white hover:text-black text-white font-bold py-6 px-14 text-xl rounded shadow-lg transition-all w-max"
            >
              BOOK NOW
            </button>
          </div>

          {/* Bullet Points (unchanged) */}
          <div className="hidden lg:flex flex-wrap gap-4 pt-4 text-black text-sm md:text-base">
            <span className="flex items-center gap-1">✔ Instant booking</span>
            <span className="flex items-center gap-1">✔ Unlimited Photos</span>
            <span className="flex items-center gap-1">✔ Next Day Delivery</span>
          </div>
        </section>

        {/* Image Section */}
        <section className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center lg:h-[500px]">
          <div className="w-full max-w-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/images/port house fin-1 (1).webp"
              alt="Photographer"
              width={800}
              height={800}
              quality={100}
              className="rounded-3xl object-contain w-full h-auto"
            />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Hero;
