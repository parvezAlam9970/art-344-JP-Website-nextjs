'use client'
import React, { useState } from "react";

function getVideoId(url) {
  try {
    const parsed = new URL(url)
    return parsed.searchParams.get('v') || parsed.pathname.split('/').pop()
  } catch {
    return null
  }
}

function getThumbnail(url) {
  const id = getVideoId(url)
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
}
const GalleryTwo = ({parliamentVideos}) => {
    const [activeVideo, setActiveVideo] = useState(null)
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-[300px] w-full md:w-[95%] gap-10 mx-auto mt-10">
          {parliamentVideos.map((url, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideo(getVideoId(url))}
              className="relative w-full overflow-hidden rounded-2xl group"
            >
              <img
                src={getThumbnail(url)}
                alt={`Video ${idx + 1}`}
                className="w-full h-full object-cover aspect-video transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-4 rounded-full shadow-lg">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
        {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-black rounded-xl overflow-hidden relative h-[40vh] md:h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white bg-primary bg-opacity-40 hover:bg-opacity-40 rounded-full w-10 h-10 z-10"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
      </>

  )
}

export default GalleryTwo