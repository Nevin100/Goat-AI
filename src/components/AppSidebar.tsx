import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

import { prisma } from "@/db/prisma";
import { Note } from "@prisma/client";
import { getUser } from "@/Auth/server";
import Link from "next/link";
import SidebarGroupContext from "./SidebarGroupContext";

const AppSidebar = async() => {
  const user = await getUser();

  let notes: Note[] = [];
  
  if(user){
    notes = await prisma.note.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  }

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel className="mt-2 mb-2 text-xl">
            {user ? ("Your Notes") : (
              <p>
                <Link href="/login" className="underline">LogIn</Link>
              </p>
            )}
          </SidebarGroupLabel>
          {user && <SidebarGroupContext notes={notes} />}
        </SidebarGroup>
      </SidebarContent> 
    </Sidebar>
  )
}

export default AppSidebar