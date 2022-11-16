export default function BackgroundVideo({mediaSrc}){
  return <video 
    className="absolute top-0 h-screen w-full object-cover"
    loop={true} 
    autoPlay={true}
    playsInline={true} 
    muted={true}
  >
    <source type="video/mp4" src={mediaSrc} />
  </video>
}