import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ContactsLayout metadata",
};

type Props = {
    children: React.ReactNode;
};

const ContactsLayout = ({ children }: Props) => {
    return (
        <>

            {children}
        </>
    );
};

export default ContactsLayout;

