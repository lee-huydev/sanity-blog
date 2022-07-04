import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
   return (
      <header className="flex items-center justify-between max-w-7xl mx-auto p-5">
         <div className="flex items-center space-x-5">
            <Link href="/">
               <img
                  className="w-40 object-contain cursor-pointer md:w-64"
                  src="/images/images.png"
                  alt=""
               />
            </Link>
            <div className="hidden md:flex items-center space-x-5">
               <h3>About</h3>
               <h3>Contact</h3>
               <h3 className="text-white bg-green-600 rounded-full px-4 py-1">
                  Follow
               </h3>
            </div>
         </div>
         <div className="text-green-600 flex space-x-5 items-center">
            <h3>Signin</h3>
            <h3 className="px-2 py-1 border rounded-full border-green-600">
               Get Started
            </h3>
         </div>
      </header>
   );
};

export default Header;
