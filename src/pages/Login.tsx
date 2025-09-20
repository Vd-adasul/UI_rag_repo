"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6 md:p-8">
        <Card className="w-full max-w-md p-6 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-lg mt-2">
              Enter your credentials to access the multilingual chatbot.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required className="h-12 text-base px-4 rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-lg font-medium text-gray-800 dark:text-gray-200">Password</Label>
                <Input id="password" type="password" required className="h-12 text-base px-4 rounded-lg border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
                Login
              </Button>
            </form>
            <div className="mt-8 text-center text-base text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                Sign Up
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Login;