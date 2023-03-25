import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import Link from "next/link";
const  SignoutButton = (props) => {
    // const dispatch = useDispatch();
    // const submitHandler = () =>{
    //     dispatch(signout())
    // }

    // const { status, data: session } = useSession();
    // const router = useRouter();

    const submitHandler = ()=>{
        signOut({callbackUrl: '/login'});
    }
  return (
    <button className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' onClick={submitHandler}>
      {props.children}
    </button>
  )
}

export default SignoutButton