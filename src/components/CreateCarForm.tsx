'use client';
import React from 'react';
import {useForm} from "react-hook-form";
import {carSchema, CarSchemaData} from "@/src/validators/car.validator";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCarAction} from "@/src/actions/car.actions";


const CreateCarForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<CarSchemaData>(
        {
            resolver:zodResolver(carSchema),
            mode: "onChange"
        }
    );

    const onSubmit = async (data: CarSchemaData) => {
        await createCarAction(data);
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
            <h1 className="mb-2 text-3xl font-bold text-white">
                Create car
            </h1>

            <p className="mb-8 text-zinc-400">
                Add a new car to the list
            </p>

            <div className="mb-5">
                <label className="mb-2 block text-sm text-zinc-300">
                    Brand
                </label>

                <input
                    {...register('brand')}
                    placeholder="Brand"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-zinc-400"/>

                {errors.brand && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.brand.message}
                    </p>
                )}
            </div>

            <div className="mb-5">
                <label className="mb-2 block text-sm text-zinc-300">
                    Price
                </label>

                <input
                    type="number"
                    {...register('price', {valueAsNumber: true})}
                    placeholder="Price"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-zinc-400"/>

                {errors.price && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.price.message}
                    </p>
                )}
            </div>

            <div className="mb-8">
                <label className="mb-2 block text-sm text-zinc-300">
                    Year
                </label>

                <input
                    type="number"
                    {...register('year', {valueAsNumber: true})}
                    placeholder="Year"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-zinc-400"/>

                {errors.year && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.year.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-zinc-200">
                Create car
            </button>
        </form>
    );
};

export default CreateCarForm;