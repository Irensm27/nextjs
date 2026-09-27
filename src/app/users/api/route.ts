export const GET= async (request: Request, response:Response)=>{
    console.log("GET");

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    response.headers.set("Accept", "application/json");
    return Response.json(users);
}

export const POST= async (request: Request, response:Response)=>{

}
