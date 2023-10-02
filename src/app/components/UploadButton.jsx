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
      <div>
        <CldUploadButton
          onUpload={UploadResult}
          uploadPreset="zquso3kw"
        />
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