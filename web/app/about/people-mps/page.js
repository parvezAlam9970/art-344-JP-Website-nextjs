import React from "react";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import Container from "@/components/ui/container";
import UpdateDetails from "@/components/about/profile/UpdateDetails";
import Heading from "@/components/reusable/heading";

const page = () => {
  return (
    <div>
      <BreadCrumb title="People’s MP" subTitle="About" />
      <div
        className=" bg-center bg-cover w-full h-full "
        style={{
          backgroundImage: `url('/about/people-mask.png')`,
        }}
      >
        <Container className="py-5 md:py-10 ">
          <div>
            <div>
              <Heading
                heading="Records of all the repatriation works done"
                orangeWords={3}
                className="font-pt-serif capitalize"
              />
              <div className="flex justify-center items-center text-center">
                <p className="text-sm md:text-base max-w-4xl pt-5 font-inter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <UpdateDetails
              title="Work Name"
              highlightCount={1}
              images={["/about/Frame 789 (3).png", "/about/Frame 788 (4).png"]}
            />
            <UpdateDetails
              title="Work Name"
              highlightCount={1}
              images={["/about/Frame 788 (5).png", "/about/Frame 789 (4).png"]}
              reverse
            />
            <UpdateDetails
              title="Work Name"
              highlightCount={1}
              images={["/about/Frame 789 (5).png", "/about/Frame 788 (6).png"]}
            />
             <UpdateDetails
              title="Work Name"
              highlightCount={1}
              images={["/about/Frame 788 (7).png", "/about/Frame 789 (6).png"]}
              reverse
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
