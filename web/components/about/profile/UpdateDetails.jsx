import React from "react";
import Image from "next/image";
import Heading from "@/components/reusable/heading";

const UpdateDetails = ({
  title = "Update",
  description,
  highlightCount = 2,
  images = [],
  reverse=false
}) => {
  const singleImage = images.length === 1;

  return (
    <section className="my-5 md:my-10 lg:my-16">
      <div className="grid gap-5  lg:gap-10 lg:grid-cols-2 items-center">
        <div className={`${reverse ? " order-1 lg:order-2" : ""}`}>
          <Heading
            heading={title}
            orangeWords={highlightCount}
            className="text-left font-pt-serif normal-case "
          />
          <p className="text-sm md:text-base  pt-5 max-w-xl leading-relaxed">
            {description ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. "}
          </p>
        </div>

        {images.length > 0 && (
          <div className={`${reverse ? " order-2 lg:order-1" : ""}`}>
            {singleImage ? (
              <div className=" w-full h-full  rounded-xl overflow-hidden">
                <Image
                  src={images[0]}
                  alt="update image"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5">
                {images.map((img, i) => (
                  <div key={i} className=" w-full h-full lg:h-[275px] rounded-xl overflow-hidden">
                    <Image
                      key={i}
                      src={img}
                      alt={`update-${i}`}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpdateDetails;
