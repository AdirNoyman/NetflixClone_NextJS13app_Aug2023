'use client';
import Input from '@/components/Input';
import Image from 'next/image';
import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign in
              </h2>
              <div className="flex flex-col gap-4">
                <Input
                  label="Username"
                  onChange={handleChangeUserName}
                  id="name"
                  type="text"
                  value={name}
                />
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
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Auth;

{
  /* <div className="bg-black w-full h-full lg:bg-opacity-50">
        
</div> */
}
