import Navigation from "./navigation";
import Logo from "./logo";

export default function Header(){
  return (<header 
    className="w-full h-auto px-8 py-4 flex flex-row flex-wrap gap-x-16 items-center justify-between z-10 absolute top-0"
  >
    <Logo />
    <Navigation />
  </header>)
}