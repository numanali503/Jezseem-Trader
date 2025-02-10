import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/data';
import lines from '../assets/images/lines.svg';
import logo from '../assets/images/logo.png';

function Auth() {
    const { authURL } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Login function
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${authURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || 'Login failed');
                return;
            }

            const data = await response.json();
            const { token } = data;
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            toast.success("Login successful");
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Server error. Please try again later.');
        }
    };

    return (
        <div>
            <section className="bg-mainBlue relative h-screen">
                <div className="absolute top-0 left-0 w-full h-full">
                    <img className="w-full h-full object-cover" src={lines} alt="" />
                </div>
                <div className="flex items-center justify-center h-full container mx-auto px-4">
                    <div className="max-w-sm mx-auto relative z-50 w-full flex flex-col">
                        <div className='flex justify-center items-center'>
                            <img src={logo} alt="er" className='w-60 items-center' />
                        </div>
                        <p className="text-center mb-12 mt-8 text-gray-400 uppercase text-sm font-bold">
                            Login to Administrator Account
                        </p>
                        <form onSubmit={login}>
                            <div>
                                <label htmlFor="email" className="block text-sm mb-2 text-white font-medium">Username</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="px-4 py-3 mb-6 rounded border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border-opacity-50 transition duration-200 outline-none w-full"
                                    placeholder="username@mail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label htmlFor="password" className="block text-sm mb-2 text-white font-medium">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="px-4 py-3 mb-6 rounded border border-white border-opacity-10 bg-white bg-opacity-5 text-sm placeholder-white placeholder-opacity-50 text-white focus:border-white focus:border-opacity-50 transition duration-200 outline-none w-full"
                                    placeholder="* * * * * * * *"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 rounded bg-gray-100 text-gray-900 text-sm font-semibold"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Auth;
