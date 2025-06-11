import React from "react";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import UpdateDetails from "@/components/about/profile/UpdateDetails";
import ChairmanCommittee from "@/components/about/profile/ChairmanCommittee";
import Container from "@/components/ui/container";

const ProfilePage = () => {
  return (
    <div>
      <BreadCrumb title="Profile" subTitle="About" />
      <Container>
        <UpdateDetails title="Update Current Details" highlightCount={2}  images={["/about/test1.png","/about/test2.png"]} />
        <ChairmanCommittee/>
        <UpdateDetails title="About Pilot" highlightCount={1}  images={["/about/test3.png"]} />
      </Container>
    </div>
  );
};

export default ProfilePage;
