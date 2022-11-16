import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation(){
  const router = useRouter()
  
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

  return <nav 
    className="border-b-2 border-solid border-[#ffffff30] px-4 py-2"
  >
    <ul className="flex flex-row gap-4 text-white">
      {
        links.map((link, key) => {
          return <Link 
            key={key}
            href={link.location}
          >
              <a className={"hover:text-indigo-700 px-2 relative"}>
                {link.text}
                {
                  link.location === router.asPath ? <div
                    className="w-full -bottom-3 h-[0.4rem] absolute left-0 bg-indigo-700 bg-gradient-to-r from-fuchsia-700 to-indigo-700"
                  /> : null
                }
              </a>
          </Link>
        })
      }
    </ul>
  </nav>
}