"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'name') {
      const [firstname = '', lastname = ''] = value.split(' ');
      setFormData(prev => ({
        ...prev,
        name: { firstname, lastname }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/auth/login');
      } else {
        setError('Registration failed. Please try again.');
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
          <h1 className="text-3xl mb-4 font-bold">Create an account</h1>
          <p className="mb-4">Enter your details below</p>
          
          {error && <p className="text-red-500 mb-4">{error}</p>}
    
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mt-10">
              <input
                type="text"
                id="name"
                onChange={handleChange}
                className="block w-full border-b-2 mt-10 border-gray-300 focus:border-primary focus:outline-none transition duration-200"
                placeholder="Full Name"
              />
            </div>

            <div className="mt-10">
              <input
                type="text"
                id="username"
                onChange={handleChange}
                className="block w-full border-b-2 mt-10 border-gray-300 focus:border-primary focus:outline-none transition duration-200"
                placeholder="Username"
              />
            </div>

            <div className="mt-10">
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="block w-full border-b-2 mt-10 border-gray-300 focus:border-primary focus:outline-none transition duration-200"
                placeholder="Email"
              />
            </div>
            
            <div className="mt-10">
              <input
                type="password"
                id="password"
                onChange={handleChange}
                className="block w-full border-b-2 my-10 border-gray-300 focus:border-primary focus:outline-none transition duration-200"
                placeholder="Password"
              />
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded hover:bg-primary transition duration-200"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
            
            <Button
              variant="ghost"
              type="button"
              className="w-full flex items-center justify-center border-2 hover:border-none text-gray-700 py-2 rounded hover:bg-gray-100 transition duration-200"
            >
              <Image className="h-5 w-5 mr-2" height={20} width={20} alt="Google" src="/google.png" />
              Sign In with Google
            </Button>
            
            <p className="text-center text-sm text-gray-600">
              Already have an account? <a href="/auth/login" className="text-primary">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;