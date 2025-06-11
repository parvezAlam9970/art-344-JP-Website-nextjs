import Image from "next/image";

const TestimonialCard = ({ text, author, image }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 text-center text-[#1A1A32] rounded-[30px] px-6 py-10 relative">
      {/* Quote top left */}
      <div className="text-[48px] font-bold absolute left-6 top-4">“</div>

      {/* Main Text */}
      <p className="max-w-xl mx-auto text-lg font-medium leading-relaxed z-10 relative">
        {text}
      </p>

      {/* Quote bottom right */}
      <div className="text-[48px] font-bold absolute right-6 bottom-24">”</div>

      {/* Author image */}
      <div className="mt-10 flex justify-center">
        <Image
          src={image}
          alt={author}
          width={96}
          height={96}
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Author name */}
      <p className="mt-2 font-semibold text-lg">{author}</p>
    </div>
  );
};

export default TestimonialCard;
