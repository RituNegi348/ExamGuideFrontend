import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import { useContext } from 'react';
const Login = () => {
    const { setUser } = useContext(userContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifed, setVerifed] = useState(false);
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle login logic here
    const user ={  
      email: email,
      password: password
    }
    const response = await fetch("https://examguidebackend.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    } )
    if(response.ok){
      const data = await response.json();
      setUser(data);
      setVerifed(true)
    }
  }
  if(verifed){
    return <Navigate to="/mainPage"/>
  }
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="max-w-md w-full mx-4 space-y-8 p-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            HNBGU Exam Guide
          </h1>
          <p className="text-gray-600 text-sm">Welcome back! Please sign in to your account</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 font-semibold"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition duration-150">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
