import Navigation from "./navigation";
import Logo from "./logo";

export default function Header(){
  return (<header 
    className="w-full h-auto px-8 py-4 gap-x-16 z-10 absolute top-0"
  >
    <div className="w-full max-w-screen-xl mx-auto flex flex-row flex-wrap items-center justify-between ">
      <Logo />
      <Navigation />
    </div>
  </header>)
}