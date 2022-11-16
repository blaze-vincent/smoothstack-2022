import Hero from "../components/hero/hero";

export default function Jobs(){
  return <div>
    <Hero 
      backgroundMedia={{
        type: 'image',
        src: '/peopleWorking.jpg'
      }}
      h1Content='ACTIVE JOB LISTINGS'
      h2Content='View all currently-active job listings'
    />
  </div>
}