import type { Metadata } from 'next';
import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/src/models/IComments";

interface ICommentProps {
    params: Promise<{id:string}>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata= async ({params}:ICommentProps):Promise<Metadata> => {
    const {id}= await params;
    return {title: 'Comments title' + id}
}

const CommentPage:FC<ICommentProps> = async ({searchParams}) => {

    const {data} = await searchParams;
    let commentObj = null;
    if(typeof data === 'string') {
        commentObj= JSON.parse(data) as IComment;
    }
    return (
        <div className="mx-auto w-full max-w-4xl px-6 py-10">
            {
                commentObj &&
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">

                    <p className="text-sm text-gray-500">
                        Comment #{commentObj.id}
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-gray-900">
                        {commentObj.name}
                    </h1>

                    <p className="mt-2 text-blue-600">
                        {commentObj.email}
                    </p>

                    <p className="mt-6 leading-7 text-gray-600">
                        {commentObj.body}
                    </p>

                </div>
            }
        </div>
    );
};

export default CommentPage;