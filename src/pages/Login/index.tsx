import React, { useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { FirebaseError } from 'firebase/app';

interface AppError {
  message: string;
}

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and sign-up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User:', result.user);
      alert('Logged in with Google!');
    } catch (err) {
      console.error('Google login error:', err);
      setError((err as FirebaseError).message);
    }
  };

  const handleEmailAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log('User created:', result.user);
        alert('Account created successfully!');
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', result.user);
        alert('Logged in successfully!');
      }
    } catch (err) {
      console.error('Authentication error:', (err as AppError).message);
      setError((err as AppError).message);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-pink-50 px-6'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
        {/* Branding Section */}
        <div className='text-center mb-6'>
          <img
            src='piggy.svg'
            alt='Piggy Logo'
            className='w-16 h-16 mx-auto mb-4'
          />
          <h1 className='text-3xl font-bold text-gray-900'>
            {isSignUp ? 'Join the Piggy Party!' : 'Welcome Back, Trader!'}
          </h1>
          <p className='text-sm text-gray-600 mt-1'>
            {isSignUp
              ? 'Sign up to start your trading journey with Piggy!'
              : 'Login to continue simulating trades and having fun.'}
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className='w-full bg-red-500 text-white py-2 rounded-lg mb-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'>
          {isSignUp ? 'Sign Up with Google' : 'Login with Google'}
        </button>

        {/* Divider */}
        <div className='flex items-center mb-6'>
          <div className='flex-grow h-px bg-gray-300'></div>
          <span className='px-2 text-sm text-gray-500'>OR</span>
          <div className='flex-grow h-px bg-gray-300'></div>
        </div>

        {/* Email Login or Sign-Up */}
        <form onSubmit={handleEmailAction}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-blue-400'
            />
          </div>
          {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'>
            {isSignUp ? 'Sign Up with Email' : 'Login with Email'}
          </button>
        </form>

        {/* Toggle Login/Sign-Up */}
        <p className='mt-6 text-sm text-gray-600 text-center'>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className='text-pink-500 font-medium hover:underline focus:outline-none'>
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
