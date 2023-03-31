import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export const Login = () => {
  return (
    <div className='mx-auto flex w-[80%] max-w-[400px] flex-col pt-[100px] sm:w-full'>
      <h2 className='mb-4 text-3xl font-semibold'>Login</h2>
      <p className='mb-4'>Choose the account you want to sign in with</p>

      <button
        className='mb-4 flex h-12 w-auto items-center justify-center rounded-sm bg-gray-600 duration-200 ease-in hover:bg-gray-800'
        onClick={() => signIn()}
      >
        <FaGithub className='mr-2' />
        Login with<span className='ml-1 font-semibold'>GitHub</span>
      </button>
      <button
        className='flex h-12 w-auto items-center justify-center rounded-sm bg-blue-600 duration-300 ease-in hover:bg-blue-800'
        onClick={() => signIn()}
      >
        <FaGoogle className='mr-2' />
        Login with<span className='ml-1 font-semibold'>Google</span>
      </button>
    </div>
  );
};
