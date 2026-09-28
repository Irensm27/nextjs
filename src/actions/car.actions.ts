'use server';

import {postCar} from "@/src/services/api.carservice";
import {redirect} from "next/navigation";
import {ICarPost} from "@/src/models/ICarPost";

export const createCarAction = async (data:ICarPost)=>{
    await postCar(data);

    redirect('/cars');
}