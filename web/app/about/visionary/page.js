import React from "react";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import PersonalInstance from "@/components/about/visionary/PersonalInstance";
import Container from "@/components/ui/container";
import LeadingPolitical from "@/components/about/karyakarta/LeadingPolitical";
import PoliticalCampaign from "@/components/about/karyakarta/PoliticalCampaign";

const page = () => {
  return (
    <div>
      <BreadCrumb title="Visionary" subTitle="About" />
      <div className=" bg-top bg-no-repeat"
       style={{
        backgroundImage: `url('/about/bg-mask.png')`,
      }}>
      <Container className="py-5 md:py-10 lg:py-16">
        <PersonalInstance />
        <div className=" mt-10">
        <LeadingPolitical
            heading="initiatives- Anti Tobacco campaign"
            orangeWords={3}
            para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. "
            images={[
              "/about/Frame 272 (1).png",
              "/about/Frame 762 (1).png",
            ]}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          </div>
          <div className="mt-10">
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
