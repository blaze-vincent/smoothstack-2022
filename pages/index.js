import Hero from "../components/hero/hero";

export default function Home() {
  return <div className="flex flex-col">
    <Hero 
      backgroundMedia={{
        type: 'video',
        src: 'homeBackgroundVideo.mp4'
      }}
      h1Content='A WEBSITE CLONE WITH A SPIN'
      h2Content='Created using Next.js, TailwindCSS, Docker, and MongoDB'
    />
  </div>
}
