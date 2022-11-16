import Image from 'next/image'

export default function BackgroundImage({mediaSrc}){
  return <div
    className="absolute top-0 h-screen w-full overflow-hidden"
  >
    <Image
      src={mediaSrc}
      layout='fill'
      objectFit='cover'
      alt=''
    />
  </div>
}