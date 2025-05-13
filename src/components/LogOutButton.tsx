
"use client"

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const LogOutButton = () => { 
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    console.log("Logging out...");
    setLoading(true);
  }

  return (
      <Button className="hidden sm:block w-24" onClick={handleLogout} variant="outline" disabled={loading}>
        {loading ? <Loader2 className="animate-spin"/> : <Link href={"/logout"}>Logout</Link>}
      </Button>
  )
}

export default LogOutButton;