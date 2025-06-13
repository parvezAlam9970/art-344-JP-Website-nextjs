// components/DocumentCard.jsx
import { DownloadIcon } from 'lucide-react';
import Image from 'next/image';
import ButtonOne from './button-one';

const EmblemCard = ({ title }) => {
  return (
    <div className="rounded-[12px] shadow-[0px_0px_16px_0px_#00000014] overflow-hidden w-full bg-white">
      <div className="bg-white flex justify-center items-center py-6">
        <Image src="/emblem.svg" alt="Emblem" width={80} height={80} />
      </div>
      <div className="bg-[#FFE1CD] px-4 py-5 flex flex-col justify-between h-[160px]">
        <h3 className="text-black font-medium text-[18px] leading-snug">
          {title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <ButtonOne text="View" className="px-5 text-[10px]"/>
          <DownloadIcon className="w-5 h-5 text-[#F47216] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default EmblemCard;
