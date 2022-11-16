import Image from "next/image";
import Link from "next/link";
import logo from '../static/smoothstack-logo.webp'

export default function Header(){

  const links = [
    {
      location: '/jobs',
      text: 'JOBS'
    },
    {
      location: '/internal',
      text: 'INTERNAL'
    }
  ]

  return (<header className="w-full h-auto px-8 py-4 flex flex-row flex-wrap gap-x-16 items-center z-10 absolute top-0">
    <div className="w-[25rem] max-w-full">
      <Link href='/'>
        <a>
          <Image src={logo} alt='Smoothstack logo' layout='intrinsic'/>
        </a>
      </Link>
    </div>
    <nav className="flex-grow border-b-2 border-solid border-[#737373ac] px-4 py-2">
      <ul className="flex flex-row gap-8 text-white">
        {
          links.map(link => {
            return <Link href={link.location}>
              <a className="hover:text-indigo-700">
                {link.text}
              </a>
            </Link>
          })
        }
      </ul>
    </nav>
  </header>)
}