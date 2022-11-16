import Image from "next/image"
import Link from "next/link"

export default function FooterSocials(){
  const socials = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/Smoothstack'
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/Smoothstack'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/smoothstack'
    },
  ]

  return <div className="flex flex-row gap-4">
    {socials.map((social, key) => {
      return <Link 
        href={social.url}
        key={key}
      >
        <a>
          <Image 
            src={`/svg/${social.name}.svg`}
            width={24}
            height={24}
            layout='fixed'
          />
        </a>
      </Link>
    })}
  </div>
}