import React from "react";
import Container from "../ui/container";
import Heading from "../reusable/heading";
import FormComp from "../modal/FormComp";

const ContactComp = () => {
  return (
    <Container className=" my-5 md:my-10 lg:my-16">
      <div>
        <Heading
          heading="People can drop their questions and concerns"
          orangeWords={3}
          className="font-pt-serif capitalize"
        />
        <div className="flex justify-center items-center text-center">
          <p className="text-sm md:text-base max-w-4xl pt-5 font-inter">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 mt-10  gap-10 ">
        <div className=" md:col-span-2 rounded-xl bg-[#F472161F] p-4 space-y-8" >
           <div className=" space-y-3">
             <img src='/about/pin.svg' alt="pin"/>
              <p className="font-pt-serif font-bold ">Address</p>
              <p className="font-inter text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           </div>
           <div className=" space-y-3">
             <img src='/about/mail.svg' alt="mail"/>
              <p className="font-pt-serif font-bold ">Email</p>
              <p className="font-inter text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           </div>
           <div className=" space-y-3">
             <img src='/about/call.svg' alt="call"/>
              <p className="font-pt-serif font-bold ">Phone Number</p>
              <p className="font-inter text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
           </div>

        </div>
        <div className=" md:col-span-3 shadow-lg p-5 rounded-xl">
           <h4 className=" font-semibold text-xl py-3 pb-5 md:pb-10">
            Your Voice Matters
           </h4>
          <FormComp/>
        </div>
      </div>
    </Container>
  );
};

export default ContactComp;
