import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();
  // const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push('/');
    }
  }, [router, session]);

  const {
    handleSubmit,
    register,
   
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      
      toast.error(getError(err));
    }
  };
  return (
    <>
     <ToastContainer position="bottom-center" limit={1} />
    <section className="bg-fixed bg-cover bg-blue-200 dark:bg-purple-900 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // placeholder="Please Enter A Name Here"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  // required
                  // {...register('name', { required: true,  maxLength: 25 })}

                  autoFocus
                  {...register('name', {
                    required: 'Please enter name',
                  })}
                />
                {/* {errors.name && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)} */}
                {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  // required
                  // {...register('email', { 
                  //   required: true, 
                  //   pattern: EMAIL_REGEX,
                  //   maxLength: 255 
                  // })}
                  {...register('email', {
                    required: 'Please enter email',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter valid email',
                    },
                  })}


                />
                {/* {errors.email?.type === 'required' && <p className="text-red-500">This field is required.</p>}
                {errors.email?.type === 'pattern' && <p className="text-red-500">Invalid email address.</p>}
                {errors.email?.type === 'maxLength' && <p className="text-red-500">Cannot exceed 255 characters.</p>}
  */}
                {/* {error && <div className="text-red-500">{error}</div>} */}
                {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
              </div>
              
              
              <div>

                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  // required
                  // {...register('password', { required: true,  maxLength: 25 })}
                  {...register('password', {
                    required: 'Please enter password',
                    minLength: { value: 6, message: 'password is more than 5 chars' },
                  })}
                  autoFocus


                />
                {/* {errors.password && (<p className="text-red-500">This field is required and cannot exceed 25 characters.</p>)} */}
                {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    </div>
                </div>
                <button type="submit" className="w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account? <Link href={"/"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </div>
            
            </form>
        </div>
    </div>
</div>
</section>
</>
)}
