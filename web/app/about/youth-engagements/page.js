import React from "react";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import YouthInteractions from "@/components/about/youth/YouthInteractions";
import ExploreMorePolitical from "@/components/about/karyakarta/ExploreMorePolitical";
import KeyNoteSpeaker from "@/components/about/youth/KeyNoteSpeaker";

const page = () => {
  return (
    <div>
      <BreadCrumb title="Youth Engagements" subTitle="About" />
      <YouthInteractions />
      <ExploreMorePolitical
        title="youth related seminars"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        orangeWords={1}
        campaigns={[
          {
            title: "Youth Empowerment Drive",
            description: "Engaging with young voters across the nation.",
            image: "/about/161a833953ae3c1187d1a60aeab333753624596a.png",
          },
          {
            title: "Digital Outreach Mission",
            description: "Harnessing social media to spread awareness.",
            image: "/about/161a833953ae3c1187d1a60aeab333753624596a.png",
          },
          {
            title: "Community Roadshows",
            description: "On-ground events in rural and urban centers.",
            image: "/about/161a833953ae3c1187d1a60aeab333753624596a.png",
          },
        ]}
      />
      <div
        className=" my-5 md:my-10  py-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(244, 114, 22, 0.12) 0%, rgba(45, 144, 55, 0.12) 100%)",
        }}
      >
        <ExploreMorePolitical
          title="workshops for youth"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
          orangeWords={3}
          campaigns={[
            {
              title: "Youth Empowerment Drive",
              description: "Engaging with young voters across the nation.",
              image: "/about/0cc98c3e70e002e3b3a1fe14df9e66574e078a03.png",
            },
            {
              title: "Digital Outreach Mission",
              description: "Harnessing social media to spread awareness.",
              image: "/about/0cc98c3e70e002e3b3a1fe14df9e66574e078a03.png",
            },
            {
              title: "Community Roadshows",
              description: "On-ground events in rural and urban centers.",
              image: "/about/0cc98c3e70e002e3b3a1fe14df9e66574e078a03.png",
            },
          ]}
        />
      </div>
      <KeyNoteSpeaker/>
    </div>
  );
};

export default page;
