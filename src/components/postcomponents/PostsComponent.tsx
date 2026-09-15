import React from 'react';
import {getAllPosts} from "@/src/services/api.service";
import PostComponent from "@/src/components/postcomponents/PostComponent";

const PostsComponent = async () => {
    const posts = await getAllPosts();

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;