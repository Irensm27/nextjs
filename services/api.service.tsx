import {IUser} from "@/models/IUser";

export const getAllUseers = async ():Promise<IUser[]>=>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    return users;
}