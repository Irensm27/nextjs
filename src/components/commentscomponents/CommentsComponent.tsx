import React from 'react';
import {getAllComments} from "@/src/services/api.service";
import CommentComponent from "@/src/components/commentscomponents/CommentComponent";

const CommentsComponent = async () => {
    const comments = await getAllComments();

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;