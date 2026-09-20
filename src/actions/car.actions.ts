'use server';

import {CarSchemaData} from "@/src/validators/car.validator";
import {postCar} from "@/src/services/api.carservice";
import {redirect} from "next/navigation";

export const createCarAction = async (data:CarSchemaData)=>{
    await postCar(data);

    redirect('/cars');
}