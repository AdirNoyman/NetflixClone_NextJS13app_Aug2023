'use client';
import Input from '@/components/Input';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const handleChangeEmail = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleChangeUserName = (event: any) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Sign up'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant !== 'login' && (
                <Input
                  label="Username"
                  onChange={handleChangeUserName}
                  id="name"
                  type="text"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={handleChangeEmail}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={handleChangePassword}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Create account'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already a member?'}{' '}
              &nbsp;
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Create an account' : 'Sign in'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
