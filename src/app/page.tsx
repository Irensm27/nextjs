import Form from "next/form";
import {saveAction} from "@/src/server-actions/serverActions";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Form action={saveAction} >
        <input type="text" name={'title'}/>
        <button>send</button>
      </Form>


    </div>
  );
}
