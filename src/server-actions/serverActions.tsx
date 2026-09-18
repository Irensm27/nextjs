'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const db = sql('meals.db')

export const saveMeal = async (formData: FormData)=> {
    // console.log('saveAction', formData);
    // console.log("Saving...");

    const titleValue = formData.get('title');

    db.prepare(`insert into meals(title) values (?)`)
        .run(titleValue);
    revalidatePath('/');
    // redirect('http://localhost:8000/meals');


}

type Meal = {id:number, title:string};

export const getMeals = async ():Promise<Meal[]> => {
    return db.prepare<Meal[]>('select * from meals ').all() as Meal[]
}