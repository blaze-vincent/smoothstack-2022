export default function Home() {
  return <div className="h-full">
    <video 
      className="absolute top-0 h-screen w-full object-cover"
      loop="true" 
      autoPlay='true' 
      playsInline="true" 
      muted="true" 
      width="100%"
    >
      <source type="video/mp4" src="homeBackgroundVideo.mp4" />
    </video>
    <div
      className="relative flex w-full items-center justify-center h-[20rem]"
    >
      <hgroup className="flex flex-col items-start gap-12 p-4 text-white">
        <h1 className="text-6xl sm:text-7xl font-bold">
          A WEBSITE CLONE WITH A SPIN
        </h1>
        <h2 className="text-2xl sm:text-3xl">
          Created using Next.js, TailwindCSS, Docker, and MongoDB
        </h2>
      </hgroup>
    </div>
  </div>

}
