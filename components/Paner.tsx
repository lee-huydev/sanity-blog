import React from 'react';

const Paner = () => {
   return (
      <div className="flex justify-between items-center bg-yellow-300 border-y border-black py-10">
         <div className="px-10 space-y-5 flex-grow">
            <h1 className="text-4xl max-w-xl font-serif md:text-6xl">
               <span className="underline decoration-black decoration-4">
                  TECHBLOG
               </span>{' '}
               is place to write, read and connect
            </h1>
            <h2>
               It is easy and free to post your thinking on any topic and
               connect with millions of reader
            </h2>
         </div>
         <img
            className="hidden md:inline-flex h-32 lg:h-80"
            src="/images/logotrans-removebg.png"
            alt=""
         />
      </div>
   );
};

export default Paner;
