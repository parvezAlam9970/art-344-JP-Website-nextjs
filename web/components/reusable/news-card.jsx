// components/NewsCard.jsx
import Image from 'next/image'
import { CalendarDays, ArrowRight } from 'lucide-react'

const NewsCard = ({ image, date, title, description }) => {
  return (
    <div className="flex max-w-xl bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-3"
    style={{
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.10)',
  }}
>
      <div className="w-[150px] h-auto relative shrink-0 rounded-sm ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-sm"
          style={{borderRadius: "12px"}}
        />
      </div>

      <div className="flex flex-col justify-between p-4 flex-grow">
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <CalendarDays className="w-4 h-4 mr-2" />
          {date}
        </div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="flex items-center relative pr-2">
        <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all absolute duration-200">
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default NewsCard
