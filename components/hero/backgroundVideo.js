export default function BackgroundVideo(){
  return <video 
    className="absolute top-0 h-screen w-full object-cover"
    loop={true} 
    autoPlay={true}
    playsInline={true} 
    muted={true}
    width="100%"
  >
    <source type="video/mp4" src="homeBackgroundVideo.mp4" />
  </video>
}