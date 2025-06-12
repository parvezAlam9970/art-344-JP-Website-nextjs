'use client'
import React, { useState } from 'react'



function getVideoId(url) {
  return new URL(url).searchParams.get('v');
}

function getThumbnail(url) {
  const id = getVideoId(url);
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

const GalleryOne = ({youtubeLinks}) => {
    const [activeVideo, setActiveVideo] = useState(null);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full h-auto mt-6">
        {/* Main Video */}
        <button
          onClick={() => setActiveVideo(getVideoId(youtubeLinks[0]))}
          className="relative col-span-1 md:col-span-4 rounded-xl overflow-hidden "
        >
          <img
            src={getThumbnail(youtubeLinks[0])}
            // src='/socialfeed-1.jpg'
            alt="Main Video"
            className="w-full h-[400px] object-cover object-center rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-70 p-4 rounded-full shadow-lg">
              <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </div>
          </div>
        </button>

        {/* Other Videos */}
        {youtubeLinks.slice(1).map((url, index) => (
          <button
            key={index}
            onClick={() => setActiveVideo(getVideoId(url))}
            className="relative rounded-xl overflow-hidden col-span-1"
          >
            <img
              src={getThumbnail(url)}
              alt={`Video ${index + 2}`}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 p-3 rounded-full shadow">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden relative h-[40vh] md:h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-3 right-3 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 z-10"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
            <div className=" h-full w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      </>
  )
}

export default GalleryOne