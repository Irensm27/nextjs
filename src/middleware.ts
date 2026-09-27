import {NextRequest, NextResponse} from "next/server";

export const middleware = async (request:NextRequest)=>{
    console.log('middleware');
    // const login = request.cookies.get('login');
    // const password = request.cookies.get('password');
    //
    // const token = await fetch('', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         key1: login,
    //         key2: password,
    //     })
    // })
    //     .then(res => res.json());

    // const token = 'dhhdgskljcnlkxd6314cdcd';
    //
    // const response = NextResponse.next({
    //     headers:{Authorization:token}
    // })
    // return response;

    return new NextResponse('hello', {headers:{'xxx':'yyy'}})

}
export const config = {
    matcher: '/auth'
}