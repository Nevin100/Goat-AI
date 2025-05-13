/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { CardContent, CardFooter } from './ui/card';
import { Label } from "@/components/ui/label"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

type Props = {
  type: 'login' | 'signup'
}

const AuthForm = ({type} : Props) => {
  const isLoginForm = type === 'login'; 
  const router = useRouter();

  const [isPending, startTransition] = useTransition()
  const handleSubmit = async (formData: FormData) => { 
    console.log('formData', formData);
  }
  return (
    <div>
      <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-8">
          <div className="flex flex-col gap-3.5">
            <Label htmlFor="email" className='text-lg'>Email :</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              disabled={isPending}
              className="w-full py-4 my-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col gap-3.5">
            <Label htmlFor="email" className='text-lg'>Password :</Label>
            <Input
              type="Pawssword"
              name="Password"
              id="Password"
              placeholder="Type your Password"
              disabled={isPending}
              className="w-full py-4 my-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-4 mt-8'>
          <Button className='w-full hover:cursor-pointer my-1 py-5 text-lg'>
            {isPending ? <Loader2 className='animate-spin'/> : isLoginForm ? 'Login' : 'Sign Up'}
          </Button>
          <p className='text-md'>{isLoginForm ? ("Don't have an account yet?? ") : ("Already have an Account")}
            <Link href={isLoginForm ? "/sign-up" : "/login"} className='text-md'>{ isLoginForm ? "SignUp" : "LogIn"}</Link>
          </p>

        </CardFooter>
      </form>
    </div>
  )
}

export default AuthForm