import Link from "next/link";

export default function FooterLink({href, text}){
  return <Link href={href}>
    <a className="text-indigo-700">
      {text}
    </a>
  </Link>
}