import React from 'react';
import {getAllCars} from "@/src/services/api.carservice";
import CarComponent from "@/src/components/CarComponent";
import {ICars} from "@/src/models/ICars";

const CarsComponent = async () => {
    const cars = await getAllCars();
    return (
        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-5">
            {
                cars.map((car: ICars) =>
                    <CarComponent car={car} key={car.id}/>)
            }
        </div>
    );
};

export default CarsComponent;