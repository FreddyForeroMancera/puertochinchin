import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as z from 'zod';

const eventSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  attendees: z.number().min(1),
  estimatedDate: z.string().min(8),
  eventType: z.string().min(2),
  message: z.string().min(10),
  source: z.string().optional()
});

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ message: 'Database not configured' }, { status: 500 });
  }

  try {
    const payload = await request.json();
    const data = eventSchema.parse(payload);

    await prisma!.eventLead.create({ data });

    return NextResponse.json({ message: 'Evento registrado' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.issues }, { status: 400 });
    }

    return NextResponse.json({ message: 'No se pudo guardar el lead de evento' }, { status: 500 });
  }
}
