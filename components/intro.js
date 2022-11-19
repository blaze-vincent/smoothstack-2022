import { useState, useEffect } from 'react'

export default function Intro(){
  const descriptors = [
    "Smoothstack", 
    "opportunity", 
    "a new future", 
    "a dream career"
  ]
  const [descriptor, setDescriptor] = useState(0)

  const cycleDescriptor = () => {
    setDescriptor(++descriptor % 4);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      cycleDescriptor()
    }, 2000);
    return () => {
      clearTimeout(timer)
    }
  }, [descriptor])

  return <div className="
    w-full min-h-screen m-auto
    flex flex-col gap-8 
    justify-center items-center text-center
    px-4 py-8
    "
  >
    <hgroup
      className='flex flex-col items-center'
    >
      <h2 className='text-2xl sm:text-4xl'>
        We are
      </h2>
      <h3
        className='text-4xl sm:text-6xl font-bold text-indigo-700'     
      >
        {descriptors[descriptor]}
      </h3>
    </hgroup>
    <div className='text-lg sm:text-2xl flex flex-col gap-4 max-w-[50rem]'>
        <p>Across America, young, ambitious software engineers are ready to start their career in tech. They have the raw skills, and they&apos;re ready to work hard &ndash; but they need formal experience, mentors, and access to top employers.</p>
        <p>Does this sound like you? Are you looking to convert desire and aptitude into a clear career path?</p>
    </div>
  </div>
}