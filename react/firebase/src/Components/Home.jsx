import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase';



export default function Home() {

    const submitHandler = (event) => {
        event.preventDefault();
        writeUserData(event.target.username.value);
    }

    function writeUserData(uname) {
        const database = getDatabase(app);
        set(ref(database, 'users/' + Date.now()), {
            username: uname,
        });
    }

  return (
    <div>
      


      <form onSubmit={submitHandler}>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="janesmith"
        autoComplete="username"
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
        <button>submit</button>
      </form>
    </div>
  )
}
