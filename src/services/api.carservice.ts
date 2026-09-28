import {ICars} from "@/src/models/ICars";
import {ICarPost} from "@/src/models/ICarPost";


const baseUrl = 'http://bigbird.space/carsAPI/v1'

export const getAllCars = async ():Promise<ICars[]> => {
    return await fetch(baseUrl+ '/cars')
        .then(value => value.json())
}

export const postCar = async (car: ICarPost):Promise<ICars> => {
    return await fetch(baseUrl+'/cars',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)
    })
    .then(value => value.json())
}