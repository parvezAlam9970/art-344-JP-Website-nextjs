import React from "react";
import SubHeading from "../reusable/sub-heading";
import Heading from "../reusable/heading";
import Line from "../reusable/horizontal-line";
import Description from "../reusable/description";
import Image from "next/image";

const cards = [
  {
    image: "/performance-1.jpg",
    logo: "/lotus.svg",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it is to make a type specimen book.",
    list: [
      "Lorem ipsum has been the industry's",
      "Lorem ipsum has been the industry's",
      "Lorem ipsum has been the industry's",
    ],
    bottom:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it is to make a type specimen book.",
  },
  {
    image: "/performance-1.jpg",
    logo: "/lotus.svg",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it is to make a type specimen book.",
    list: [
      "Lorem ipsum has been the industry's",
      "Lorem ipsum has been the industry's",
      "Lorem ipsum has been the industry's",
    ],
    bottom:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it is to make a type specimen book.",
  },
  {
    image: "/performance-2.jpg",
    logo: "/lotus.svg",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it is to make a type specimen book.",
    list: [
      "Lorem ipsum has been the industry's",
      "Lorem ipsum has been the industry's",
      "Lorem ipsum has been the industry's",
    ],
    bottom:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, it is to make a type specimen book.",
  },
];

const PerformanceTracker = () => {
  return (
    <section className="mt-[30rem] md:mt-72 lg:mt-60 xl:mt-2">
      <div className="flex flex-col items-center gap-4">
        <SubHeading subHeading="MP Performance Tracker" />
        <Heading
          heading="Fueling performance with data Intelligence"
          orangeWords={2}
        />
        <Line />
        <Description
          className="text-center"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center md:items-end gap-4 bg-white mt-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group [perspective:1000px] rounded-[1.25rem] max-w-sm flex-1"
          >
            <div className="relative w-full aspect-[374/388] hover:mt-44 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] h-full md:h-[400px]">
              {/* Front (Image) */}
              <div className="absolute [backface-visibility:hidden] rounded-[20px] overflow-hidden shadow-md">
                <Image
                  src={card.image}
                  alt="Performance Card"
                  width={374}
                  height={388}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Back (Card Content) */}
              <div
                className="relative -top-44 duration-500 inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] px-6 rounded-[20px] flex flex-col justify-center shadow-md h-[460px] md:h-[562px] gap-2 md:gap-8"
                style={{
                  background:
                    "linear-gradient(180deg, #F47216 0%, #FFECDE 0.01%, #F47216 100%)",
                }}
              >
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 ">
                  <div className="bg-white rounded-full border border-primary p-2">
                    <Image
                      src={card.logo}
                      alt="Logo"
                      width={93}
                      height={93}
                      className="w-11 h-11 md:w-24 md:h-24 object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-xl md:text-4xl font-semibold mb-4 font-newsreader">
                  {card.title}
                </h2>
                <p className="text-black mb-4 text-sm md:text-base font-normal">
                  {card.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {card.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Image
                        src="/ellipse.svg"
                        alt="Bullet"
                        className="w-3 h-3"
                        width={28}
                        height={28}
                      />
                      <span className="font-normal text-sm font-poppins">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-black font-normaltext-base">{card.bottom}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformanceTracker;
