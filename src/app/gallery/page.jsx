import UploadButton from "../components/UploadButton"

export default function GalleryPage() {
  return (
    <section>
      <div className='flex justify-between'>
        <h1 className='text-4xl tracking-widest'>Gallery</h1>
        <UploadButton />
      </div>
    </section>
  )
}