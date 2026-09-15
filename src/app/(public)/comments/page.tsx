import React from 'react';
import CommentsComponent from "@/src/components/commentscomponents/CommentsComponent";

const CommentsPage = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <h1 className="mb-8 text-3xl font-bold">
                Comments
            </h1>

            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;