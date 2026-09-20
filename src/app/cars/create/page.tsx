import React from 'react';
import CreateCarForm from "@/src/components/CreateCarForm";
import Link from "next/link";

const CreateCarPage = () => {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-10">

            <div className="mx-auto max-w-7xl">
                <Link
                    href="/cars"
                    className="text-zinc-400 transition hover:text-white">
                    ← Back to cars
                </Link>

                <div className="flex justify-center pt-12">
                    <CreateCarForm/>
                </div>
            </div>

        </main>
    );
};

export default CreateCarPage;