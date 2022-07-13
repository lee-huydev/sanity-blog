import Link from 'next/link';
import React from 'react';

const Header = () => {
   return (
      <header className="flex items-center justify-between max-w-7xl mx-auto p-5">
         <Link href="/">
            <img
               className="w-40 object-contain cursor-pointer md:w-64"
               src="/images/images.png"
               alt=""
            />
         </Link>
         <Link
            href="https://blog-tech.sanity.studio/desk"
            className="text-green-600 flex space-x-5 items-center"
         >
            <a className="px-5 text-lg sm:text-xl  py-1 border rounded-full border-green-600 hover:bg-green-600 transition-all duration-200 ease-in-out hover:text-white">
               Sign in
            </a>
         </Link>
      </header>
   );
};

export default Header;
