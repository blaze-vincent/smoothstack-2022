import BackgroundContent from "./backgroundContent/backgroundContent";
import TextOverlay from "./textOverlay";

export default function Hero({backgroundMedia, h1Content, h2Content}){
  return <div>
    <BackgroundContent media={backgroundMedia} />
    <TextOverlay h1Content={h1Content} h2Content={h2Content} />
  </div>
}