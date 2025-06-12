import UpdateDetails from "@/components/about/profile/UpdateDetails";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import Heading from "@/components/reusable/heading";
import Container from "@/components/ui/container";
import React from "react";
import LeadingPolitical from "@/components/about/karyakarta/LeadingPolitical";
import PoliticalCampaign from "@/components/about/karyakarta/PoliticalCampaign";
import CampaignLegends from "@/components/about/karyakarta/CampaignLegends";
import ExploreMorePolitical from "@/components/about/karyakarta/ExploreMorePolitical";

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
        <Container className="py-5 md:py-10 ">
          <div>
            <div>
              <Heading
                heading="Election In charge roles"
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
              title="Election In charge role in Assam"
              highlightCount={3}
              images={["/about/Frame 789.png", "/about/Frame 788 (1).png"]}
            />
            <UpdateDetails
              title="Election In charge role in Uttar Pradesh"
              highlightCount={2}
              images={["/about/Frame 788 (2).png", "/about/Frame 789 (1).png"]}
              reverse
            />
            <UpdateDetails
              title="Election In charge role in Delhi"
              highlightCount={2}
              images={["/about/Frame 789 (2).png", "/about/Frame 788 (3).png"]}
            />
          </div>
           <LeadingPolitical
            heading="leading political campaign on ground"
            orangeWords={3}
            images={[
              "/about/Frame 272.png",
              "/about/Frame 273.png",
            ]}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <PoliticalCampaign
            heading="Initiatives - Anti Tobacco Campaign Benefits"
            orangeWords={4}
            imageSrc="/about/Frame 273.png"
            videoSrc="/about/test-video.mp4"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever it to make a type specimen book."
            listItems={[
              "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
              "It has survived not only five centuries, but also the leap into electronic typesetting.",
            ]}
          />
        </Container>
        <CampaignLegends />
        <ExploreMorePolitical
          title="Explore more political campaign"
          description="Here are some of our featured political campaigns showcasing successful grassroots engagement and strategic outreach."
          orangeWords={2}
          campaigns={[
            {
              title: "Youth Empowerment Drive",
              description: "Engaging with young voters across the nation.",
               image:"/about/354ed60974b2ca33fbc91f0875a507bb9dac6171.png"
              },
            {
              title: "Digital Outreach Mission",
              description: "Harnessing social media to spread awareness.",
               image:"/about/354ed60974b2ca33fbc91f0875a507bb9dac6171.png"
              },
            {
              title: "Community Roadshows",
              description: "On-ground events in rural and urban centers.",
               image:"/about/354ed60974b2ca33fbc91f0875a507bb9dac6171.png"
              },
          ]}
        />

      </div>
    </div>
  );
};

export default page;
