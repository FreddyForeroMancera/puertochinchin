'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre es requerido'),
  email: z.string().email('Ingresa un correo válido'),
  phone: z.string().min(7, 'Teléfono inválido'),
  message: z.string().min(10, 'Describe tu mensaje')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormValues) {
    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/leads/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('No se pudo enviar el formulario.');

      setStatus('success');
      setServerMessage('¡Gracias! Pronto nos comunicamos contigo.');
      reset();
    } catch (error) {
      setStatus('error');
      setServerMessage(error instanceof Error ? error.message : 'Ocurrió un error.');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-brand-cream bg-white p-8 shadow-card">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Nombre
          <input type="text" {...register('name')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.name ? <span className="text-sm text-brand-red">{errors.name.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Correo
          <input type="email" {...register('email')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.email ? <span className="text-sm text-brand-red">{errors.email.message}</span> : null}
        </label>
      </div>
      <div className="space-y-2 text-sm font-medium text-brand-dark">
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Teléfono
          <input type="tel" {...register('phone')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.phone ? <span className="text-sm text-brand-red">{errors.phone.message}</span> : null}
        </label>
      </div>
      <div className="space-y-2 text-sm font-medium text-brand-dark">
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Mensaje
          <textarea rows={5} {...register('message')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.message ? <span className="text-sm text-brand-red">{errors.message.message}</span> : null}
        </label>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto" variant="primary" size="lg">
          {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
        {status === 'success' || status === 'error' ? (
          <p className={status === 'success' ? 'text-sm text-emerald-700' : 'text-sm text-brand-red'}>{serverMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
