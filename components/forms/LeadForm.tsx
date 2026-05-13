'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';

const leadSchema = z.object({
  name: z.string().min(2, 'Nombre es requerido'),
  company: z.string().min(2, 'Empresa es requerida'),
  email: z.string().email('Ingresa un correo válido'),
  phone: z.string().min(7, 'Teléfono inválido'),
  attendees: z.number().min(1, 'Indica número de asistentes'),
  estimatedDate: z.string().min(8, 'Fecha estimada requerida'),
  eventType: z.string().min(2, 'Tipo de evento requerido'),
  message: z.string().min(10, 'Describe brevemente tu solicitud')
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LeadFormValues>({ resolver: zodResolver(leadSchema) });

  async function onSubmit(data: LeadFormValues) {
    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/leads/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'landing-eventos' })
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar la cotización, intenta de nuevo.');
      }

      setStatus('success');
      setServerMessage('¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.');
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
          Nombre completo
          <input type="text" {...register('name')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.name ? <span className="text-sm text-brand-red">{errors.name.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Empresa
          <input type="text" {...register('company')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.company ? <span className="text-sm text-brand-red">{errors.company.message}</span> : null}
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Correo electrónico
          <input type="email" {...register('email')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.email ? <span className="text-sm text-brand-red">{errors.email.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Celular
          <input type="tel" {...register('phone')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.phone ? <span className="text-sm text-brand-red">{errors.phone.message}</span> : null}
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Asistentes estimados
          <input type="number" {...register('attendees', { valueAsNumber: true })} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.attendees ? <span className="text-sm text-brand-red">{errors.attendees.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Fecha estimada
          <input type="date" {...register('estimatedDate')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.estimatedDate ? <span className="text-sm text-brand-red">{errors.estimatedDate.message}</span> : null}
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Tipo de evento
          <select {...register('eventType')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10">
            <option value="">Selecciona una opción</option>
            <option value="Fin de año empresarial">Fin de año empresarial</option>
            <option value="Reunión corporativa">Reunión corporativa</option>
            <option value="Cumpleaños familiar">Cumpleaños familiar</option>
            <option value="Integración de equipo">Integración de equipo</option>
          </select>
          {errors.eventType ? <span className="text-sm text-brand-red">{errors.eventType.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm font-medium text-brand-dark">
          Mensaje adicional
          <textarea rows={4} {...register('message')} className="w-full rounded-3xl border border-brand-cream bg-brand-cream/80 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-red focus:ring-2 focus:ring-brand-red/10" />
          {errors.message ? <span className="text-sm text-brand-red">{errors.message.message}</span> : null}
        </label>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto" variant="primary" size="lg">
          {status === 'loading' ? 'Enviando...' : 'Solicitar cotización'}
        </Button>
        {status === 'success' || status === 'error' ? (
          <p className={status === 'success' ? 'text-sm text-emerald-700' : 'text-sm text-brand-red'}>{serverMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
