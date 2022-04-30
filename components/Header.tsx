import Link from "next/link";
import LightSwitch from "./LightSwitch";

function Header({}) {
  return (
    <section>
        <nav className="flex justify-between items-center py-6 px-10 mt-5 relative">
        <Link href={'/'}>
            <a className="text-lg font-bold">
                James
            </a>
        </Link>
        <div className="xl:hidden">
            <button className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-800">
            <svg className="block h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Mobile menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>
        </div>
        <ul className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href={'/'}>
                <li><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">Blog</a></li>
            </Link>
            <Link href={'/about'}>
                <li><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">About</a></li>
            </Link>
            <Link href={'/contact'}>    
                <li><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800">Contact</a></li>
            </Link>
            <li><LightSwitch /></li>
        </ul>
        </nav>
        <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto"><div className="flex items-center mb-8">
                <button className="navbar-close">
                <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                </div>
                <div className="my-auto">
                <ul className="py-10">
                    <li className="mb-1"><a className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">Blog</a></li>
                    <li className="mb-1"><a className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">About</a></li>
                    <li className="mb-1"><a className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded" href="#">Contact</a></li>
                </ul></div>
            </nav>
        </div>
    </section>
  );
}

export default Header;