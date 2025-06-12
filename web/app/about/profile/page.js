import React from "react";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import UpdateDetails from "@/components/about/profile/UpdateDetails";
import ChairmanCommittee from "@/components/about/profile/ChairmanCommittee";
import IncomeTaxGrid from "@/components/about/profile/IncomeTaxGrid";
import MemberCommerceCommittee from "@/components/about/profile/MemberCommerceCommittee";
import Container from "@/components/ui/container";

const ProfilePage = () => {
  return (
    <div>
      <BreadCrumb title="Profile" subTitle="About" />
      <Container>
        <UpdateDetails
          title="Update Current Details"
          highlightCount={2}
          images={["/about/test1.png", "/about/test2.png"]}
        />
        <ChairmanCommittee />
      </Container>
      <IncomeTaxGrid />
      <Container>
        <MemberCommerceCommittee />
        <UpdateDetails
          title="About Pilot"
          highlightCount={1}
          images={["/about/test3.png"]}
        />
      </Container>
    </div>
  );
};

export default ProfilePage;
