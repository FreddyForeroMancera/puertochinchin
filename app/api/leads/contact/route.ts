import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ message: 'Database not configured' }, { status: 500 });
  }

  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);

    await prisma!.contactLead.create({ data });

    return NextResponse.json({ message: 'Contacto recibido' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.issues }, { status: 400 });
    }

    return NextResponse.json({ message: 'No se pudo guardar el contacto' }, { status: 500 });
  }
}
