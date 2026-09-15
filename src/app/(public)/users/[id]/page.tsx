import type {Metadata} from 'next';
import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/src/models/IUsers";

interface IUserProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: IUserProps): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: 'User Page title ' + id
    };
};

const UserPage: FC<IUserProps> = async ({searchParams}) => {
    const {data} = await searchParams;

    let obj = null;

    if (typeof data === 'string') {
        obj = JSON.parse(data) as IUser;
    }

    return (
        <div className="mx-auto w-full max-w-4xl px-6 py-10">
            {
                obj &&
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">

                    <h1 className="text-3xl font-bold text-gray-900">
                        {obj.name}
                    </h1>

                    <p className="mt-1 text-gray-500">
                        @{obj.username}
                    </p>

                    <div className="mt-6 space-y-2">
                        <p><b>Email:</b> {obj.email}</p>
                        <p><b>Phone:</b> {obj.phone}</p>
                        <p><b>Website:</b> {obj.website}</p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">
                            Address
                        </h2>

                        <div className="mt-2 text-gray-600">
                            <p>{obj.address.street}, {obj.address.suite}</p>
                            <p>{obj.address.city}</p>
                            <p>{obj.address.zipcode}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">
                            Company
                        </h2>

                        <div className="mt-2 text-gray-600">
                            <p className="font-medium">
                                {obj.company.name}
                            </p>
                            <p>{obj.company.catchPhrase}</p>
                            <p>{obj.company.bs}</p>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default UserPage;