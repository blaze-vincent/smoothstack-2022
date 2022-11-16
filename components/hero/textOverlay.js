export default function TextOverlay({h1Content, h2Content}){
  return <div
    className="relative flex w-full items-center justify-center h-screen"
  >
    <hgroup className="flex flex-col items-start gap-12 p-4 text-white">
      <h1 className="text-6xl sm:text-7xl font-bold">
        {h1Content}
      </h1>
      {
        h2Content ? <h2 className="text-2xl sm:text-3xl">
          {h2Content}
        </h2> : null
      }
    </hgroup>
  </div>
}