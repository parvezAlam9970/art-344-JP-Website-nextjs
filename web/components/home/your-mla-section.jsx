import Image from "next/image";
import SubHeading from "@/components/reusable/sub-heading";
import Heading from "../reusable/heading";
import Line from "../reusable/horizontal-line";
import Description from "../reusable/description";

const YourMLASection = () => {
  return (
    <section className=" mt-32">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-16 ">
        <div className="flex order-2 lg:order-1 flex-col items-center lg:items-start justify-center gap-6 font-poppins basis-1/2">
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
        <div className=" space-y-3 sm:space-y-5 order-1 lg:order-2 ">
          <div className="grid grid-cols-3 gap-3 sm:gap-7 relative">
            <div className="relative col-span-2 w-full h-[200px] sm:h-[260px]">
              <div className="absolute -top-2 sm:-left-3  sm:-top-3 -left-2 w-full h-full bg-primary rounded-xl rounded-tl-[150px] z-0 "></div>

              {/* Image container */}
              <div className="relative w-full h-full rounded-xl rounded-tl-[150px] overflow-hidden z-10">
                <Image
                  src="/your-mla/your-mla-1.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className=" col-span-1 h-[200px] sm:h-[260px] rounded-xl rounded-tr-[150px] relative overflow-hidden z-10">
              <Image
                src="/your-mla/your-mla-2.jpg"
                alt=""
                className=" w-full h-full object-cover  "
                width={1000}
                height={1000}
              />
            </div>
            <div className=" h-[50px] w-[50px] bg-white p-1 rounded-full absolute -bottom-6 right-[100px] sm:right-[185px] z-20  ">
              <img src="/about/Group.svg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-7 mr-2 sm:mr-3">
            <div className=" h-[180px] sm:h-[220px] rounded-xl rounded-bl-[150px] overflow-hidden z-10">
              <Image
                src="/your-mla/your-mla-2.jpg"
                alt=""
                className=" w-full h-full object-cover  "
                width={1000}
                height={1000}
              />
            </div>
            <div className="relative  w-full h-[200px] sm:h-[260px]">
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-full h-full bg-black rounded-xl rounded-br-[150px] z-0 "></div>

              {/* Image container */}
              <div className="relative w-full h-full rounded-xl rounded-br-[150px] overflow-hidden z-10">
                <Image
                  src="/your-mla/your-mla-1.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourMLASection;
