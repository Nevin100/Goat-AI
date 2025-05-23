
"use client"

import React, { useTransition } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { CardContent, CardFooter } from './ui/card';
import { Label } from "@/components/ui/label"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { LoginAction,SignUpAction } from '@/Actions/users';

type Props = {
  type: 'login' | 'signup'
}

const AuthForm = ({type} : Props) => {
  const isLoginForm = type === 'login'; 
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => { 
    startTransition( async () => {
      const email = formData.get('email') as string;
      const password = formData.get('Password') as string;

      let errorMessage;
      let title;
      let description;

      if(isLoginForm) {
        errorMessage = (await LoginAction(email, password)).errorMessage;
        title = "Logged In";
        description = "You have successfully logged in";
      } else {
        errorMessage = (await SignUpAction(email, password)).errorMessage;
        title = "Signed Up";
        description = "You have successfully signed up";            
      }

      if (errorMessage) {
        toast.error(errorMessage, {
          description: "Please try again",
          duration: 5000,
        });
      } else {
        toast.success(title, {
          description: description,
          duration: 5000,
        });
        router.replace('/');
      }
      
    })
  }
  return (
    <div>
      <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-8">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className='text-lg'>Email :</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              disabled={isPending}
              className="w-full py-4 my-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="Password" className='text-lg'>Password :</Label>
            <Input
              type="password"
              name="Password"
              id="Password"
              placeholder="Type your Password"
              disabled={isPending}
              className="w-full py-4 my-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-5 mt-8'>
          <Button className='w-full hover:cursor-pointer my-1 py-5 text-lg'>
            {isPending ? <Loader2 className='animate-spin'/> : isLoginForm ? 'Login' : 'Sign Up'}
          </Button>
          <p className='text-md'>{isLoginForm ? ("Don't have an account yet?? ") : ("Already have an Account")}{" "}
            <Link href={isLoginForm ? "/sign-up" : "/login"} className='text-md text-blue-400'>{ isLoginForm ? "SignUp" : "LogIn"}</Link>
          </p>

        </CardFooter>
      </form>
    </div>
  )
}

export default AuthForm