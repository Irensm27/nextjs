import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AboutLayout metadata",
};

type Props = {
    children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
    return (
        <div>
            AboutLayout
            {children}
        </div>
    );
};
export default AboutLayout;

