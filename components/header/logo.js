import Image from "next/image";
import Link from "next/link";
import logo from '../../static/smoothstack-logo.webp'

export default function Logo(){
  return <div 
    className="w-[25rem] max-w-full"
  >
    <Link href='/'>
      <a>
        <Image src={logo} alt='Smoothstack logo' layout='intrinsic'/>
      </a>
    </Link>
  </div>
}