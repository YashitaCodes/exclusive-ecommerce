"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginSection: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        router.push('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <Image src="/loginbanner.png" width={805} height={781} alt="Login banner" className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl mb-4 font-bold">Login to Exclusive</h1>
          <p className="mb-4">Enter your details below</p>
          
          {error && <p className="text-red-500 mb-4">{error}</p>}
    
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-10">
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full border-b-2 mt-10 border-gray-300 focus:border-primary focus:outline-none transition duration-200"
                placeholder="Username"
              />
            </div>
            
            <div className="mt-10">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full border-b-2 my-10 border-gray-300 focus:border-primary focus:outline-none transition duration-200"
                placeholder="Password"
              />
            </div>
            
            <div className="flex gap-5">
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-2 rounded hover:bg-primary transition duration-200"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
              
              <Button
                variant="ghost"
                type="button"
                className="w-full flex items-center justify-center text-primary text-right py-2 rounded hover:bg-gray-100 transition duration-200"
              >
                Forgot Password?
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;