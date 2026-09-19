import {createUser} from "@/src/app/actions/user";

export default function Home() {
  return (
      <form action={createUser}>
        <input type='text' name='name' placeholder='name'/>
        <input type='text' name='email' placeholder='email'/>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
  );
}
