import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExplorePoliticalCards = ({data}) => {
  return (
    <Link href={'/about/youth-engagements/seminar-detail'} className="h-[400px] relative rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <Image
        src={ data?.image || "/about/354ed60974b2ca33fbc91f0875a507bb9dac6171.png"} 
        alt="India Seizes the Baton"
        fill
        className="object-cover"
      />

      {/* Bottom Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-5 text-white">
        <h3 className="text-xl font-semibold mb-1">
          {data?.title}
        </h3>
        <p className="text-xs opacity-70 mb-5">11 May, 2025 · Baijayant “Jay” Panda</p>
        <p className="text-sm leading-snug line-clamp-3">
         {data?.description}
        </p>
      </div>
    </Link>
  );
};

export default ExplorePoliticalCards;
