import React from 'react';
import UsersComponent from "@/src/components/userscomponents/UsersComponent";

const UsersPage = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
            <h1 className="mb-8 text-3xl font-bold">
                Users
            </h1>

            <UsersComponent/>
        </div>
    );
};

export default UsersPage;