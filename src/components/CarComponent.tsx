import React, {FC} from 'react';
import {ICars} from "@/src/models/ICars";

interface CarProps {
    car: ICars;
}

const CarComponent: FC<CarProps> = ({car}) => {
    return (
        <div className="
            bg-zinc-900
            border border-zinc-800
            rounded-xl
            p-6
            hover:border-zinc-600
            transition">
            <div className="text-sm text-zinc-500 mb-2">
                Car #{car.id}
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
                {car.brand}
            </h2>

            <div className="flex justify-between text-zinc-400">
                <span>{car.year}</span>

                <span className="text-white font-medium">${car.price}</span>
            </div>
        </div>
    );
};

export default CarComponent;