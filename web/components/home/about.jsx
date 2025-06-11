import React from "react";
import Container from "../ui/container";
import Image from "next/image";

const About = () => {
  return (
    <section className= "mt-24 md:mt-32">
      
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-16">
          <div
            className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] md:grid-cols-[18.5rem_20.25rem] md:grid-rows-[18.25rem_12.625rem] gap-2 md:gap-4 flex-shrink "
            
          >
            <div className="flex items-end justify-end gap-8">

              
              <div className="relative">
                <Image
                src="/circle-1.svg"
                alt="Background"
                className="absolute top-3 md:top-6 -left-8 md:-left-16 w-5 h-5 md:w-[40px] md:h-[40px]"
                width={40}
                height={40}
              />
                <Image
                src="/circle-2.svg"
                alt="Background"
                className="absolute -top-5 md:-top-10 -right-5 md:-right-10 w-11 h-11 md:w-[84px] md:h-[84px]"
                width={84}
                height={84}
              />
              <Image
                src="/about-1.jpg"
                className="rounded-sm md:rounded-lg w-28 h-36 md:w-[240px] md:h-[292px]"
                alt="Background"
                width={240}
                height={292}
                style={{ borderRadius: "2rem" }}
              />
              
              </div>
              
            </div>
            <div className="row-span-2 flex flex-col justify-around">
              <Image
                src="/about-2.jpg"
                className="mt-12 w-40 h-32 md:w-[321px] md:h-[272px] rounded-sm md:rounded-lg"
                alt="Background"
                width={321}
                height={272}
                style={{ borderRadius: "2rem" }}
              />
              <Image
                src="/circle-3.svg"
                alt="Background"
                className="self-start mb-6 md:mb-0 ml-8 md:ml-16 w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                width={40}
                height={40}
              />
            </div>
            <div className="justify-self-end relative">
              <Image
                src="/bar-1.svg"
                alt="Background"
                className="absolute top-0 -right-12 md:-right-24 w-[90px] h-[37px] md:w-[180px] md:h-[72px]"
                width={180}
                height={72}
              />
              <Image
                src="/about-3.jpg"
                alt="Background"
                className="w-40 h-28 md:w-[295px] md:h-[202px]"
                width={295}
                height={202}
                style={{ borderRadius: "2rem" }}
              />
              
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-center gap-6 font-poppins">
          <h6 className="text-base font-light text-[#F47216]">About</h6>
          <h4 className="font-bold md:text-2xl lg:text-2xl xl:text-4xl text-nowrap font-playfair">Baijayant ‘Jay’ Panda</h4>
          <hr className="bg-[#F47216] h-[2px] w-[55%]"/>
          <p className="text-base font-light text-center lg:text-right">Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard.</p>
<div className="flex items-center justify-between gap-3">
<h6 className="font-medium text-sm">Know More...</h6><a
    href="/"
    className="w-11 h-9 flex items-center justify-center rounded-[4px] bg-gradient-to-r from-[#F47316] via-[#FFBF07] to-yellow-400"><img src="/arrow.svg" alt="" /></a>
</div>

          </div>
        </div>
    </section>
  );
};

export default About;
