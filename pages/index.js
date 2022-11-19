import Hero from "../components/hero/hero";
import Intro from "../components/intro";

export default function Home() {
  return <div className="flex flex-col">
    <Hero 
      backgroundMedia={{
        type: 'video',
        src: 'homeBackgroundVideo.mp4'
      }}
      h1Content='A WEBSITE CLONE WITH A TWIST'
      h2Content='Created using Next.js, TailwindCSS, Docker, and MongoDB'
    />
    <Intro />
  </div>
}
