// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';
type Data = {
   message: string;
   err?: any;
};
const config = {
   dataset: 'production',
   projectId: 'i7b4vj8j',
   useCdn: process.env.NODE_ENV === 'production',
   token: 'skKMNIeuGQ1PeAn0ZTVV6PEC7wg5A8FuiSqbOO94AL5pfMfg1hNtzqXUBcFWLiDhZEx9NzwWqTSup1HhvwqyupIyOLJnnlAs2wQJK7wKbxPP7Fk9IpfrBD3PJSfxWbpBoWNVHt5XAT6RZ1yoHhyLlZ67GvopOKLayxvF8nS3Z3NTvcYHNh8x',
};
const client = sanityClient(config);
export default async function createComment(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { _id, name, email, comment } = JSON.parse(req.body);
   try {
      await client.create({
         _type: 'comment',
         post: {
            _type: 'reference',
            _ref: _id,
         },
         name,
         email,
         comment,
      });
   } catch (err) {
      return res.status(500).json({ message: `Coundn't submit comment`, err });
   }
   console.log("Comment submited")
   return res.status(200).json({ message: 'Comment submited' });
}
