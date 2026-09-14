import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PostsLayout metadata",
};

type Props = {
    children: React.ReactNode;
};

const PostsLayout = ({ children }: Props) => {
    return (
        <>
            PostsLayout
            {children}
        </>
    );
};

export default PostsLayout;
