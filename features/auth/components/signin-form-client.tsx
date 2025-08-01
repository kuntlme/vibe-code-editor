"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Github } from "lucide-react";
import { signIn } from "next-auth/react";



const SignInFormClient = () => {
  const handleGoogleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("google");
  };

  const handleGithubSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("github");
  };
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form onSubmit={handleGoogleSignIn}>
          <Button type="submit" variant={"outline"} className="w-full">
            <Chrome className="mr-2 h-4 w-4" />
            <span>Sign in with google</span>
          </Button>
        </form>
        <form onSubmit={handleGithubSignIn}>
          <Button type="submit" variant={"outline"} className="w-full">
            <Github className="mr-2 h-4 w-4" />
            <span>Sign in with github</span>
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
