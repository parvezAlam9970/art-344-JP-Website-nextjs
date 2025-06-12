"use client";
import React from "react";
import Heading from "../reusable/heading"
import Line from "../reusable/horizontal-line";
import Description from "../reusable/description";

import Image from "next/image";
const galleryImages = [
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-3.jpg",
];
const Undertaking = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-6 mt-20">
        <Heading
          heading="Chairman Committee On Public Undertaking"
          orangeWords={2}
          className="font-pt-serif capitalize"
        />
        <Description
          className="text-center"
          descriptionOne="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
      <div className="flex justify-end gap-5 mt-10 relative">
          {galleryImages.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden">
                <Image
                  className="w-full h-full object-cover rounded-xl"
                  src={src}
                  alt=""
                  width={300}
                  height={266}
                />
              </div>
          ))}
      </div>
    </section>
  );
};

export default Undertaking;
