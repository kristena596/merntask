"use client";
import useLogin from "@/hooks/auth/useLogin";
import React from "react";
import { FaLock } from "react-icons/fa";

export default function LoginForm() {
  const { handleSubmit, handleFieldChange, isLoading } = useLogin();

  return (
    <div className="w-full max-w-sm p-6 sm:p-8 bg-white dark:bg-neutral-900 border simple-border rounded-2xl shadow-xl transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
          <FaLock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        Welcome Back
      </h2>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        Please sign in to your account
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleFieldChange}
            className="peer w-full p-4 rounded-lg bg-transparent border simple-border text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleFieldChange}
            className="peer w-full p-3 rounded-lg bg-transparent border simple-border text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 rounded-lg text-white font-semibold transition-all bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
        © {new Date().getFullYear()} YourAppName. All rights reserved.
      </p>
    </div>
  );
}