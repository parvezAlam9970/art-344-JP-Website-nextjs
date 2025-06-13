import Image from "next/image";
import { Quote } from "lucide-react"; // optional for quote icons

const TestimonialCard = ({ text, name, image, isActive }) => {
  return (
    <div
      className={`relative px-6 sm:px-10 py-8 sm:py-10 rounded-2xl text-center transition-all duration-300 ease-in-out
      ${isActive
        ? "bg-gradient-to-r from-[#F47216] via-[#FFECDE] to-[#F47216] text-[#1B1F3B] h-[180px] shadow-2xl md:scale-125 z-10"
        : "bg-[#F0F0F0] text-[#828282] h-[160px] "
      }`}
    >
      {/* Top-left quote icon */}
      {isActive && (
        <div className="absolute top-4 left-4 text-[32px] sm:text-[40px] font-bold">
          <img src='/about/Vector.svg'/>
        </div>
      )}

      {/* Main Text */}
      <p className="font-poppins text-sm sm:text-base leading-relaxed z-10 relative mx-auto max-w-xl line-clamp-3">
        {text}
      </p>

      {/* Bottom-right quote icon */}
      {isActive && (
        <div className="absolute bottom-4 right-4 text-[32px] sm:text-[40px] font-bold">
          <img src='/about/Vector (1).svg'/>

        </div>
      )}

      {/* Author Image + Name */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={72}
          height={72}
          className="rounded-full border-4 border-white shadow-md"
        />
        <p className="mt-1 text-xs font-medium">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
