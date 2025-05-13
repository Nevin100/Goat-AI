import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import AuthForm from '@/components/AuthForm';
const Login = () => {
  return (
    <div className='mt-10 flex flex-1 flex-col items-center'>
      <Card className='w-full max-w-md'> 
        <CardHeader className='mb-4'>
          <CardTitle className='text-center text-3xl font-semibold'>Login</CardTitle>
          {/* <CardDescription className='text-center text-sm'>Login to your account</CardDescription>   */}
        </CardHeader>

        <AuthForm type='login'/>
      </Card>
    </div>
  )
}

export default Login