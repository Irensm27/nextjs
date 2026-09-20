import React from 'react';
import CarsComponent from "@/src/components/CarsComponent";
import Link from "next/link";

const carsPage = () => {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Cars
                        </h1>

                        <p className="text-zinc-400 mt-2">
                            Available cars
                        </p>
                    </div>

                    <Link
                        href="/cars/create"
                        className="
                            bg-white
                            text-black
                            px-5 py-3
                            rounded-lg
                            font-medium
                            hover:bg-zinc-200
                            transition"
                    >
                        + Add car
                    </Link>
                </div>

                <CarsComponent/>

            </div>
        </main>
    );
};

export default carsPage;