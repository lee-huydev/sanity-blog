import React from 'react';

const Loading = () => {
   return (
      <div className="flex items-center h-screen">
         <div className="animate-pulse border border-blue-300 shadow rounded-md p-4 max-w-xl w-full h-40 mx-auto">
            <div className="animate-pulse flex space-x-4 mt-5">
               <div className="rounded-full bg-slate-200 h-12 w-12"></div>
               <div className="flex-1 space-y-6 py-1">
                  <div className="h-3 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                     <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-3 bg-slate-200 rounded col-span-1"></div>
                     </div>
                     <div className="h-3 bg-slate-200 rounded"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Loading;
