"use client"
import { useState, useEffect } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

const UploadButton = () => {
  const [imageId, setImageId] = useState("");

  const UploadResult = (result) => {
    setImageId(result.info.public_id);
  }


  return (
    <main>
      <div className='py-2 px-3 bg-emerald-900 text-lg border border-white rounded-xl transition hover:bg-gray-400 hover:text-neutral-800 duration-500'>
        <div className='flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>

          <CldUploadButton
            onUpload={UploadResult}
            uploadPreset="zquso3kw"
          />
        </div>
      </div>
      <div>
        {imageId && (
          <CldImage
            width="400"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )}
      </div>
    </main>
  )
}

export default UploadButton