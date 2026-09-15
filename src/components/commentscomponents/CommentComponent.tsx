import React, {FC} from 'react';
import {IComment} from "@/src/models/IComments";
import Link from "next/link";

interface ICommentProps {
    comment: IComment;
}

const CommentComponent: FC<ICommentProps> = ({comment}) => {
    return (
        <Link
            href={{
                pathname: '/comments/' + comment.id.toString(),
                query: {data: JSON.stringify(comment)}
            }}
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-lg font-semibold text-gray-900">
                {comment.name}
            </h2>

            <p className="mt-2 text-sm text-blue-600">
                {comment.email}
            </p>

            <p className="mt-3 text-gray-600">
                {comment.body}
            </p>
        </Link>
    );
};

export default CommentComponent;