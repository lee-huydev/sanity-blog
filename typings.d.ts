interface Comment {
    _createAt: string,
    name: string;
    email: string;
    comment: string;
}
export interface Post {
    _id: string,
    title: string,
    description: string,
    slug: {
        current: string
    }
    author: {
        name: string,
        image: string
    },
    mainImage: string,
    category: string,
    publishedAt: string,
    body: any,
    comments: Comment[]
}


export interface ID {
   _id: string
}

export interface InputForm{
    _id: string,
    name: string,
    email: string,
    comment: string,

}