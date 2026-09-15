import React from 'react';
import PostsComponent from "@/src/components/postcomponents/PostsComponent";

const PostsPage = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <h1 className="mb-8 text-3xl font-bold">
                Posts
            </h1>

            <PostsComponent/>
        </div>
    );
};

export default PostsPage;