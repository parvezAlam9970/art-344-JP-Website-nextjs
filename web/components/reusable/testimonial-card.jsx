import Image from "next/image";

const TestimonialCard = ({ text, name, image, isActive }) => {
  return (
    // <div className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 text-center text-[#1A1A32] rounded-[30px] px-6 py-10 relative">
    <div
  className={`text-center px-12 py-10  flex items-center relative rounded-[20px] ${
    isActive
      ? "bg-[linear-gradient(90deg,_#F47216_0%,_#FFECDE_50.48%,_#F47216_100%)] absolute w-[110%] text-[#1B1F3B] h-[261px] shadow-2xl"
      : "bg-[#F0F0F0] text-[#828282] h-[203px]"
  }`}
  style={{ borderRadius: "20px" }}
>
      {/* Quote top left */}
      <div className={`text-[48px] font-bold absolute left-6 top-6 text-white ${isActive ? "text-[#1B1F3B]" : "text-white"}`}>“</div>

      {/* Main Text */}
      <p className="max-w-xl mx-auto text-base font-normal z-10 relative font-poppins">
        {text}
      </p>

      {/* Quote bottom right */}
      <div className={`text-[48px] font-bold absolute right-6 bottom-6 ${isActive ? "text-[#1B1F3B]" : "text-white"}`}>”</div>

      {/* Author image */}
      <div className="mt-10 flex flex-col items-center absolute -bottom-20 left-52">
        <Image
          src={image}
          alt={name}
          width={72}
          height={72}
          className="rounded-full border-4 border-white shadow-md"
        />
      <p className="mt-2 font-normal text-[9px]">{name}</p>

      </div>

      {/* Author name */}
    </div>
  );
};

export default TestimonialCard;
