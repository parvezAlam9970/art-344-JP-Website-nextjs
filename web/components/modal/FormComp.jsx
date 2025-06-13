"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import Input from "@/components/formInputs/Input";
import Textarea from "@/components/formInputs/Textarea";


const FormComp = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const value = watch();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
     <form className="grid grid-cols-2 gap-2 md:gap-4">
          <div className=' col-span-1'>
            <Input
              name="name"
              placeholder="Fist name"
              label="Fist name"
              register={register}
              errors={errors}
            />
            </div>
          <div className=' col-span-1'>

            <Input
              name="lastName"
              placeholder="Last Name"
              label="Last Name"
              register={register}
              errors={errors}
            />
              </div>
          <div className=' col-span-2 md:col-span-1'>
            <Input
              name="phone"
              placeholder="Phone No."
              label="Phone No."
              register={register}
              errors={errors}
            />
              </div>
          <div className=' col-span-2 md:col-span-1'>
            <Input
              name="email"
              placeholder="Email"
              label="Email"
              register={register}
              errors={errors}
            />
            </div>
            <div className=" col-span-2">
              <Textarea
                name="message"
                register={register}
                errors={errors}
                label="Message"
                placeholder="Write here..."
              />
            </div>
            <div className=" col-span-2 flex justify-center sm:justify-end">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-20 rounded-[5px] transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
  )
}

export default FormComp