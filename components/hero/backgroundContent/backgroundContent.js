import BackgroundImage from './backgroundImage';
import BackgroundVideo from './backgroundVideo';

export default function BackgroundContent({media}){
  //media: {type: 'video'|'image', src: '/path/to/media'}

  const outputs = {
    'video': <BackgroundVideo mediaSrc={media.src} />,
    'image': <BackgroundImage mediaSrc={media.src}/>
  }

  return outputs[media.type] || null;
}