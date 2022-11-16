export default function TextOverlay(){
  return <div
    className="relative flex w-full items-center justify-center h-screen"
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
}