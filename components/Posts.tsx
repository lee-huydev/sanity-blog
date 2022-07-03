import React from 'react';
import Link from 'next/link';
import { Post } from '@typing';
import { urlFor } from '@sanity';
type Props = {
   post: Post;
};

const Posts = ({ post }: Props) => {
   return (
         <Link key={post._id} href={`/post/${post._id}?=${post.slug.current}`}>
            <div className="group cursor-pointer border rounded-lg overflow-hidden">
               <div>
                  <img className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()} alt="" />
               </div>
               <div className="flex justify-between items-center p-5 bg-white">
                  <div>
                     <p className="text-lg font-bold">{post.title}</p>
                     <p>{post.description}</p>
                  </div>
                  <div>
                     <img
                        className="h-12 w-12 rounded-full"
                        src={urlFor(post.author.image).url()}
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </Link>
   );
};

export default Posts;
