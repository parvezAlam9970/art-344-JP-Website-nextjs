import React from "react";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import PoliticalCampaign from "@/components/about/karyakarta/PoliticalCampaign";
import Container from "@/components/ui/container";

const page = () => {
  return (
    <div>
      <BreadCrumb
        title="Seminar Detail"
        subTitle="About"
        pageTitle="Youth Engagements"
      />
       <div className=" bg-top bg-no-repeat py-5 md:py-16"
       style={{
        backgroundImage: `url('/about/bg-mask.png')`,
      }}>
      <Container>
      <div>
        <PoliticalCampaign
          heading="initiatives- Anti Tobacco campaign benefits"
          orangeWords={4}
          imageSrc="/about/365bebc00ce9af0e28949031431aea8adaee482f.jpg"
          videoSrc="/about/test-video.mp4"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever it to make a type specimen book."
          listItems={[
            "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
            "It has survived not only five centuries, but also the leap into electronic typesetting.",
          ]}
        />
        </div>
      </Container>
      </div>
    </div>
  );
};

export default page;
