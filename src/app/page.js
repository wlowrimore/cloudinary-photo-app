import UploadButton from './components/UploadButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-6xl text-violet-900'>Welcome!</h1>
      <UploadButton />
    </main>
  )
}
