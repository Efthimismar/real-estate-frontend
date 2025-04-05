"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login with:", { email, password });
    } else {
      console.log("Register with:", { name, email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="flex w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden">
        <div className="hidden md:block w-1/2 bg-blue-600 p-8 relative">
          <div className="absolute inset-0 bg-blue-700 opacity-20"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h2 className="text-white text-3xl font-bold">
              Find Your Dream Property
            </h2>
            <div className="text-white text-lg mt-4">
              <p className="mb-4">
                Join thousands of satisfied customers who found their perfect
                home with us.
              </p>
              <p>
                Our platform provides access to exclusive listings and
                personalized service.
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-white text-sm opacity-80">
                © 2023 Real Estate Agency. University of Piraeus.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className="text-gray-600 mt-2">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Fill out the form to get started"}
            </p>
          </div>

          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`pb-2 px-4 text-sm font-medium ${
                isLogin
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`pb-2 px-4 text-sm font-medium ${
                !isLogin
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required={!isLogin}
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            )}

            {!isLogin && (
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required={!isLogin}
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
