import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <nav className="bg-gray-900 px-8 py-5">
            <ul className="flex items-center gap-8 text-white">
                <li>
                    <Link
                        href="/"
                        className="transition hover:text-blue-400"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        href="/users"
                        className="transition hover:text-blue-400"
                    >
                        Users
                    </Link>
                </li>

                <li>
                    <Link
                        href="/posts"
                        className="transition hover:text-blue-400"
                    >
                        Posts
                    </Link>
                </li>

                <li>
                    <Link
                        href="/comments"
                        className="transition hover:text-blue-400"
                    >
                        Comments
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;