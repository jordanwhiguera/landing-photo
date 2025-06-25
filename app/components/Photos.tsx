"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button"; // adjust path if needed

const Photos: React.FC = () => {
  const handleBookNowClick = () => {
    window.location.href = "/booking"; // replace with your actual booking link if needed
  };

  return (
    <Container>
      <div className=" ">
        {/* Photos Section */}
        {/* Call/Text CTA Section */}
        <hr className="mb-12 lg:mb-16 border-t-2 border-black w-full" />
        <section className=" text-center px-4  ">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-relaxed">
            CLICK <span className="font-extrabold">“BOOK NOW”</span> OR
            <br />
            CALL/TEXT <span className="font-extrabold">772-607-0620</span> TO
            SCHEDULE A SHOOT!
          </p>
          <p className="text-base md:text-lg text-black font-medium mt-4">
            (Serving Saint Lucie, Martin, and Indian River County)
          </p>
        </section>
        <hr className="my-12 lg:my-16 border-t-2 border-black w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            src="/images/5-thumb IN-30.webp" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />
          <Image
            src="/images/port other-8 (1).webp" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />

          <Image
            src="/images/6-a1a in-10.webp" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />
          <Image
            src="/images/cro new-1.webp" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />
          <Image
            src="/images/7-thumb IN-21.webp" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />
          <Image
            src="/images/1-thumb ex-4.webp" // Replace with actual paths to your images
            alt="Image 1"
            layout="responsive"
            width={500} // These sizes are placeholders
            height={500} // Adjust the width and height to maintain the aspect ratio you desire
            className="rounded-3xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default Photos;
