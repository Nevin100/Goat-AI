
"use client"

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LogOutAction } from "@/Actions/users";

const LogOutButton = () => { 
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    const {errorMessage} = await LogOutAction();

    if (errorMessage) {
      toast.error(errorMessage, {
      description: "Please try again",
      duration: 5000,
    });
    } else {
      toast.success("Logout Successfull", {
      description: "Redirecting to SignUp page",
      duration: 5000,
    });
    router.push('/sign-up');
    }
          
  }

  return (
      <Button className="hidden sm:block w-24" onClick={handleLogout} variant="outline" disabled={loading}>
        {loading ? <Loader2 className="animate-spin"/> : <Link href={"/sign-up"}>Logout</Link>}
      </Button>
  )
}

export default LogOutButton;