import React, {FC} from 'react';
import {IUser} from "@/src/models/IUsers";
import Link from "next/link";

interface IUserProps {
    user: IUser;
}

const UserComponent: FC<IUserProps> = ({user}) => {
    return (
        <Link
            href={{
                pathname: '/users/' + user.id.toString(),
                query: {data: JSON.stringify(user)}
            }}
            className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-xl font-semibold text-gray-900">
                {user.name}
            </h2>

            <p className="mt-2 text-gray-600">
                @{user.username}
            </p>

            <p className="text-gray-500">
                {user.email}
            </p>

            <p className="text-gray-500">
                {user.phone}
            </p>
        </Link>
    );
};

export default UserComponent;