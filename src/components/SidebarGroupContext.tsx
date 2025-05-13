'use client';

import React from 'react'
import { Note } from '@prisma/client';

type Props = {
  notes: Note[];
}

const SidebarGroupContext = ({ notes }: Props) => {
  console.log(notes);
  return (
    <div>SidebarGroupContext</div>
  )
}

export default SidebarGroupContext