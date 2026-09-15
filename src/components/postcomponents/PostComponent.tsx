import React, {FC} from 'react';
import {IPost} from "@/src/models/IPosts";
import Link from "next/link";

interface IPostProps {
    post: IPost;
}

const PostComponent: FC<IPostProps> = ({post}) => {
    return (
        <Link
            href={{
                pathname: '/posts/' + post.id.toString(),
                query: {data: JSON.stringify(post)}
            }}
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-xl font-semibold text-gray-900">
                {post.title}
            </h2>

            <p className="mt-3 text-gray-600">
                {post.body}
            </p>
        </Link>
    );
};

export default PostComponent;