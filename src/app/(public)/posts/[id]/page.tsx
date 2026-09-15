import type { Metadata } from 'next';
import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/src/models/IPosts";

interface IPostProps{
    params: Promise<{id:string}>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata= async ({params}: IPostProps):Promise<Metadata> => {
    const {id} = await params;
    return {title: `Posts for ${id}`,}
}

const PostPage:FC<IPostProps> =async ({searchParams}) => {
    const {data}= await searchParams;
    let postObj = null;
    if(typeof data === 'string'){
        postObj = JSON.parse(data) as IPost;
    }
    return (
        <div className="mx-auto w-full max-w-4xl px-6 py-10">
            {
                postObj &&
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">

                    <p className="mb-2 text-sm text-gray-500">
                        Post #{postObj.id}
                    </p>

                    <h1 className="text-3xl font-bold text-gray-900">
                        {postObj.title}
                    </h1>

                    <p className="mt-6 leading-7 text-gray-600">
                        {postObj.body}
                    </p>

                </div>
            }
        </div>
    );
};

export default PostPage;