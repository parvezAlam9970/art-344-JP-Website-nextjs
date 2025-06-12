import UpdateDetails from "@/components/about/profile/UpdateDetails";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import Container from "@/components/ui/container";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCrumb title="Karyakarta" />
      <div
        className=" bg-center bg-cover w-full h-full "
        style={{
          backgroundImage: `url('/about/global.png')`,
        }}
      >
        <Container>
        <div>
            asda
             <UpdateDetails
            title="Update Current Details"
            highlightCount={2}
            images={["/about/test1.png", "/about/test2.png"]}
          />
        </div>
         
        </Container>
      </div>
    </div>
  );
};

export default page;
