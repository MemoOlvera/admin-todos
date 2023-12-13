
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  await prisma.todo.deleteMany();
  
  await prisma.todo.createMany({
    data: [
      { description: 'Something', complete: true },
      { description: 'Something2' },
      { description: 'Something3' },
    ]
  })
    
  return NextResponse.json({ message: 'Seed Executed' });
}