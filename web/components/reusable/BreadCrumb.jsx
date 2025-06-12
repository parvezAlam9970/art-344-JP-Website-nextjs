import React from "react";
import Container from "../ui/container";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const BreadCrumb = ({
  title = "Profile",
  subTitle = "About",
  desc = "",
  pageTitle="",
  imageUrl = "/about/breadcrumb.png",
}) => {
  return (
    <div
      className={`h-[380px] md:h-[450px] lg:h-[520px] bg-cover bg-center`}
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      <Container className="h-full w-full bg-black/30 flex flex-col  md:flex-row justify-center  md:justify-between items-center pt-[100px] md:pt-[140px] text-white">
        <div>
          <p className="font-pt-serif text-[30px] md:text-[40px] lg:text-[55px] xl:text-[68px] ">
            {title}
          </p>
          <p className=" max-w-md lg:max-w-2xl text-sm md:text-base font-inter ">
            {desc ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum and scrambled it to make a type specimen book."}
          </p>
        </div>
        <div className="font-inter  flex pt-3 md:pt-20">
          <Link href="/">Home</Link>
          <p className=" flex justify-center items-center">
            <MdKeyboardArrowRight className="text-[25px]" />
          </p>
          <p>{subTitle}</p>
          <p className="font-inter flex justify-center items-center">
            <MdKeyboardArrowRight className="text-[25px]" />
          </p>
          <p>{ pageTitle || title}</p>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
