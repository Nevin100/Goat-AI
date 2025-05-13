"use server";

import { createClient } from "@/Auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

//Login Action : 
export const LoginAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();
    
    const { error } = await auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error;

    return {errorMessage : null}
  } catch (error) {
    console.error("Error logging in:", error);
    return handleError(error);
  }
}

//Signup Action
export const SignUpAction = async (email: string, password: string) => {
  try {
    const { auth } = await createClient();
    
    //signup Function for the data
    const { data ,error } = await auth.signUp({
      email,
      password,
    })

    //if any error thow the error :
    if (error) throw error;

    //if no error then get the user id from the data
    const userId = data.user?.id;
    if (!userId) throw new Error("User ID not found");

    //Add user to database : 
    await prisma.user.create({
      data: {
        id: userId,
        email: email,
      },
    });
    
    return { errorMessage: null }
  } catch (error) {
    console.error("Error logging in:", error);
    return handleError(error);
  }
}

//Logout Actions : 
export const LogOutAction = async () => {
  try {
    const { auth } = await createClient();
    
    const { error } = await auth.signOut({
    })

    if (error) throw error;

    return {errorMessage : null}
  } catch (error) {
    console.error("Error logging in:", error);
    return handleError(error);
  }
}