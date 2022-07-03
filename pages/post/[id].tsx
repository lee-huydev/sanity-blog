import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PortableText from 'react-portable-text';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Header, Loading } from '@components/index';
import { sanityClient, urlFor } from '@sanity';
import { ID, Post, InputForm } from '@typing';
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
   post: Post[];
};

const PostDetail = ({ post }: Props) => {
   const router = useRouter();
   const [data] = post;
   console.log(data);
   const _publishedAt = new Date(data.publishedAt).toLocaleString();
   // Handler form
   const [submited, setSubmited] = useState<boolean>(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<InputForm>();

   const onSubmit: SubmitHandler<InputForm> = async (data) => {
      fetch('/api/createComment', {
         method: 'POST',
         body: JSON.stringify(data),
      })
         .then((data) => {
            console.log(data);
            setSubmited(true);
         })
         .catch((err) => {
            console.log(err);
            setSubmited(false);
         });
   };
   return (
      <main>
         {router.isFallback ? (
            <Loading />
         ) : (
            <>
               <Header />
               <img
                  className="w-full object-cover h-40"
                  src={urlFor(data.mainImage).url()}
                  alt=""
               />
               <article className="max-w-3xl mx-auto p-5">
                  <h1 className="text-3xl mt-10 mb-3">{data.title}</h1>
                  <h2 className="text-xl font-light text-gray-500 mb-2">
                     {data.description}
                  </h2>
                  <div className="flex items-center space-x-2">
                     <img
                        className="h-10 w-10 rounded-full"
                        src={urlFor(data.author.image).url()}
                        alt=""
                     />
                     <p className="font-extralight text-sm">
                        Blog post by{' '}
                        <span className="font-bold">{data.author.name}</span> -
                        Published at {_publishedAt}
                     </p>
                  </div>
                  <div className="mt-10">
                     <PortableText
                        dataset="production"
                        projectId="i7b4vj8j"
                        content={data.body}
                        serializers={{
                           h1: (props: any) => (
                              <h1
                                 className="text-3xl font-bold my-5"
                                 {...props}
                              />
                           ),
                           h2: (props: any) => (
                              <h2
                                 className="text-2xl font-bold my-5"
                                 {...props}
                              />
                           ),
                           h3: (props: any) => (
                              <h3
                                 className="text-xl font-medium my-5"
                                 {...props}
                              />
                           ),
                           li: ({ children }: any) => (
                              <li className="ml-4 list-disc">{children}</li>
                           ),
                           link: ({ href, children }: any) => (
                              <a
                                 href={href}
                                 className="text-blue-500 hover:underline"
                              >
                                 {children}
                              </a>
                           ),
                           img: ({ href }: any) => (
                              <img className="w-full" src={href} alt="" />
                           ),
                        }}
                     />
                  </div>
               </article>
               <hr className="max-w-lg my-5 mx-auto border border-yellow-300" />
               {submited ? (
                  <div className="flex flex-col p-10 my-10 bg-green-500 text-white max-w-2xl mx-auto">
                     <h3 className="text-3xl font-bold">
                        Thank you for submitting your comment
                     </h3>
                     <p>Once it has been approved, it will appear bellow!</p>
                  </div>
               ) : (
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
                  >
                     <h3 className="text-xs text-green-500 mb-2">
                        Enjoyed this article?
                     </h3>
                     <h4 className="text-xl font-bold">
                        Leave a comment below!
                     </h4>
                     <hr className="py-3 mt-2" />
                     <input
                        {...register('_id')}
                        name="_id"
                        value={data._id}
                        type="hidden"
                     />
                     <label className="block mb-5">
                        <span className="text-gray-700">Name</span>
                        <input
                           {...register('name', { required: true })}
                           className="shadow border rounded py-2 px-3 mt-1 w-full block "
                           type="text"
                           placeholder="John"
                        />
                     </label>
                     <label className="block mb-5">
                        <span className="text-gray-700">Email</span>
                        <input
                           {...register('email', { required: true })}
                           className="shadow border rounded py-2 px-3 mt-1 w-full block "
                           type="email"
                           placeholder="you@email.com"
                        />
                     </label>
                     <label className="block mb-5">
                        <span className="text-gray-700">Comment</span>
                        <textarea
                           {...register('comment', { required: true })}
                           className="shadow border rounded py-2 px-3 mt-1 w-full block"
                           placeholder="Some person opinion about blog..."
                           rows={8}
                        ></textarea>
                     </label>
                     <div className="flex flex-col p-5">
                        {errors.name && (
                           <span className="text-red-500">
                              The Feild Name is required
                           </span>
                        )}
                        {errors.email && (
                           <span className="text-red-500">
                              The Feild Email is required
                           </span>
                        )}
                        {errors.comment && (
                           <span className="text-red-500">
                              The Feild Comment is required
                           </span>
                        )}
                     </div>
                     <input
                        type="submit"
                        className="bg-green-500 hover:bg-green-400 transition-opacity duration-100 ease-in-out cursor-pointer text-white font-bold px-3 py-2 rounded"
                        value="Submit"
                     />
                  </form>
               )}
            </>
         )}
         {/* Comment */}
         <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
            <h3 className="text-4xl font-bold">Comment</h3>
            <hr className="pb-2"/>
            {data.comments.map((comment, index) => (
               <div key={index}>
                  <p>
                     {' '}
                     <span className="text-yellow-600">
                        {comment.name}:{' '}
                     </span>{' '}
                     {comment.comment}
                  </p>
               </div>
            ))}
         </div>
      </main>
   );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
   const query = `*[_type == "post"]{
        _id,
    }`;
   const ids = await sanityClient.fetch(query);
   const paths = ids.map((id: ID) => ({
      params: {
         id: id._id,
      },
   }));
   return {
      paths,
      fallback: true,
   };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   console.log(params);
   const query = `*[_type == "post" && _id == $_id][0]{ 
        _id,
      title,
      description,
      slug,
      author -> {
      name,
      image,
    },
      mainImage,
      categories,
      publishedAt,
      body,
      "comments": *[_type == "comment" && approved == true && post._ref == ^._id]
    }`;

   const res = await sanityClient.fetch(query, {
      _id: `${params?.id}`,
   });

   if (!res) {
      return {
         notFound: true,
      };
   }
   return {
      props: {
         post: res,
      },
      revalidate: 60, // After 60 second it will update the old cached version
   };
};
