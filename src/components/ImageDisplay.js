



"use client"
import React from 'react'
import { useState } from 'react'
import { IoMdClose } from "react-icons/io";


const ImageDisplay = (props) => {

    const image=props.image
    //console.log(image)
    if (!image?.data || !image?.contentType) {
    return <></>
  }

  const imgSrc = `data:${image.contentType};base64,${Buffer.from(image.data.data).toString('base64')}`   //stuff from mongodb
   
  
  const [showPreview, setShowPreview] = useState(false);
  return (
     <>
      <img
        src={imgSrc}
        alt="Uploaded"
        className="rounded-lg shadow-md max-w-xs cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => setShowPreview(true)}
      />

      {showPreview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          
        >
            <button onClick={() => setShowPreview(false)} className="absolute top-4 right-4 bg-gray-300 border-2 text-black p-3 rounded-full shadow-lg 
             hover:bg-red-500 hover:text-white transition-colors duration-300 z-50">
                <IoMdClose/>
            </button>
            <img
                src={imgSrc}
                alt="Full size"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl transition-transform duration-300"
            />
        </div>
      )}
    </>
  )
}
export default ImageDisplay
