import Heading from "@/components/reusable/heading";
import ExplorePoliticalCards from "@/components/reusable/ExplorePoliticalCards";
import Container from "@/components/ui/container";
import React from "react";

const ExploreMorePolitical = ({ title, description, orangeWords = 2, campaigns = [] }) => {
  return (
    <Container className="py-5 md:py-10 ">
      <div className="flex justify-center items-center text-center">
        <div className="md:w-[70%]">
          <Heading
            heading={title}
            orangeWords={orangeWords}
            className="capitalize md:text-wrap"
          />
          <p className="text-sm py-3 md:text-base font-inter text-center">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 pt-5">
        {campaigns?.length > 0 ? (
          campaigns.map((item, idx) => (
            <ExplorePoliticalCards key={idx} data={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-sm text-gray-500">
            No campaigns available.
          </p>
        )}
      </div>
    </Container>
  );
};

export default ExploreMorePolitical;
