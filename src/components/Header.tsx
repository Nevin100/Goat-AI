import shadow from "@/styles/utilis";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const user = true;
  return (
    <header className="relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
      boxShadow: shadow
    }}>
      <Link href={"/"} className="flex items-end gap-2">
        <Image src="/goatius.png" height={60} width={60} className="rounded-full " priority alt="Logo Image"/>
      <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">GOAT <span>NOTES</span></h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <>
          <Button asChild className="hidden sm:block">
              <Link href={"/logou"}>Logout</Link>
            </Button>
          </>
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href={"/signup"}>SignUp</Link>
            </Button>
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        ) }
      </div>

    </header>
  )
}

export default Header;