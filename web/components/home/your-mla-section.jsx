import Image from "next/image";
import SubHeading from "@/components/reusable/sub-heading";
import Heading from "../reusable/heading";
import Line from "../reusable/horizontal-line";
import Description from "../reusable/description";

const YourMLASection = () => {
  return (
    <section className=" mt-32">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-16">
        <div className="flex flex-col items-center lg:items-start justify-center gap-6 font-poppins basis-1/2">
          <SubHeading subHeading="About Me" />
          <Heading heading="Your Voice, Your MLA" orangeWords={2} />
          <Line />
          <Description
            descriptionOne="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been and scrambled it to make a type been and scrambled it to make specimen book."
            descriptionTwo="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been and scrambled it to make a type been and scrambled it to make specimen book."
          />
          <div className="flex items-center justify-between gap-3">
            <h6 className="font-medium text-sm">Know More...</h6>
            <a
              href="/"
              className="w-11 h-9 flex items-center justify-center rounded-[4px] bg-gradient-to-r from-[#F47316] via-[#FFBF07] to-yellow-400"
            >
              <img src="/arrow.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="">
          <div className="grid grid-rows-[256px_256px] grid-cols-[1fr_1fr_1fr_1fr] h-[556px] w-[556px]">
            <div className="col-span-3">
              <Image
                src="/your-mla/your-mla-1.jpg"
                alt=""
                className=""
                width={364}
                height={256}
              />
            </div>
            <div className="">
              <Image
                src="/your-mla/your-mla-2.jpg"
                alt=""
                className=""
                width={142}
                height={256}
              />
            </div>
            <div className="col-span-2">
              <Image
                src="/your-mla/your-mla-3.jpg"
                alt=""
                className=""
                width={250}
                height={220}
              />
            </div>
            <div className="col-span-2">
              <Image
                src="/your-mla/your-mla-4.jpg"
                alt=""
                className=""
                width={256}
                height={256}
              />
            </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default YourMLASection;
