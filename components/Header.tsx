import Link from "next/link";
import { useState } from "react";
import LightSwitch from "./LightSwitch";

function Header({}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section>
            <nav className="flex items-center justify-between flex-wrap p-6 px-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href={'/'}>
                    <a className="text-lg font-bold dark:text-terminal">
                        James Thesken
                    </a>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded dark:text-slate-200 border-slate-400 hover:text-white hover:border-white">
                <svg className="bg-slate-200 fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={isOpen ?  "w-full block flex-grow lg:flex lg:items-center lg:w-auto" : "hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
                    <div className="text-sm lg:flex-grow lg:ml-20">
                    <Link href={'/'}>
                        <a className="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-200 hover:text-white mr-4">Blog</a>
                    </Link>
                    <Link href={'/about'}>
                        <a className="block mt-4 lg:inline-block lg:mt-0 dark:text-slate-200 hover:text-white mr-4">About</a>
                    </Link>
                    </div>
                    <div className="mt-4">
                    <LightSwitch />
                    </div>
            </div>
            </nav>
            
        </section>
    );
}

export default Header;