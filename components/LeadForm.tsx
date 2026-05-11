'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'

import { leadFormSchema, SERVICE_OPTIONS, type LeadFormValues } from '@/lib/validation'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export function LeadForm({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark'
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  const onSubmit = async (data: LeadFormValues) => {
    setState('submitting')
    setErrorMsg(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const payload = await res.json().catch(() => null)
        throw new Error(payload?.error || `Server returned ${res.status}`)
      }
      reset()
      setState('success')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={
              isDark
                ? 'rounded-3xl border border-vermilion/30 bg-vermilion/[0.06] p-10 md:p-12'
                : 'rounded-3xl border border-vermilion/30 bg-vermilion/5 p-10 md:p-12'
            }
          >
            <div
              className={
                isDark
                  ? 'text-display text-3xl leading-tight tracking-[-0.02em] text-cream'
                  : 'text-display text-3xl leading-tight tracking-tightest'
              }
            >
              Got it — thanks.
            </div>
            <p
              className={
                isDark
                  ? 'mt-4 text-base leading-relaxed text-cream/75'
                  : 'mt-4 text-base leading-relaxed text-ink/75'
              }
            >
              We have received your note and will reply within one working day.
              If it is urgent, write to{' '}
              <a
                href="mailto:hello@biech.in"
                className="underline decoration-vermilion underline-offset-4"
              >
                hello@biech.in
              </a>{' '}
              and we will do better.
            </p>
            <button
              type="button"
              onClick={() => setState('idle')}
              className="mt-8 text-sm text-vermilion underline-offset-4 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            <FieldRow
              label="Your name"
              error={errors.name?.message}
              required
              isDark={isDark}
            >
              <input
                type="text"
                autoComplete="name"
                placeholder="Priya Iyer"
                className={inputClass(!!errors.name, isDark)}
                {...register('name')}
              />
            </FieldRow>

            <FieldRow
              label="Email"
              error={errors.email?.message}
              required
              isDark={isDark}
            >
              <input
                type="email"
                autoComplete="email"
                placeholder="priya@company.com"
                className={inputClass(!!errors.email, isDark)}
                {...register('email')}
              />
            </FieldRow>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FieldRow label="Phone (optional)" error={errors.phone?.message} isDark={isDark}>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98xxxxxxxx"
                  className={inputClass(!!errors.phone, isDark)}
                  {...register('phone')}
                />
              </FieldRow>
              <FieldRow label="Company (optional)" error={errors.company?.message} isDark={isDark}>
                <input
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Co"
                  className={inputClass(!!errors.company, isDark)}
                  {...register('company')}
                />
              </FieldRow>
            </div>

            <FieldRow label="What can we help with?" isDark={isDark}>
              <select
                className={inputClass(false, isDark)}
                defaultValue=""
                {...register('service')}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </FieldRow>

            <FieldRow
              label="Tell us a bit more"
              error={errors.message?.message}
              required
              isDark={isDark}
            >
              <textarea
                rows={5}
                placeholder="Project, timeline, budget if you have one in mind. Even a sentence is enough — we will follow up with questions."
                className={`${inputClass(!!errors.message, isDark)} resize-none`}
                {...register('message')}
              />
            </FieldRow>

            {state === 'error' && (
              <div className="rounded-2xl border border-vermilion/30 bg-vermilion/5 p-4 text-sm text-vermilion">
                {errorMsg ?? 'Something went wrong. Try again, or email us directly.'}
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <p
                className={
                  isDark ? 'text-xs text-cream/55' : 'text-xs text-ink/55'
                }
              >
                We will reply within one working day.
              </p>
              <button
                type="submit"
                disabled={isSubmitting || state === 'submitting'}
                className="inline-flex h-12 items-center justify-center rounded-full bg-vermilion px-7 text-sm font-medium text-cream shadow-[0_0_24px_rgba(232,71,42,0.35)] transition-all duration-300 hover:bg-cream hover:text-vermilion hover:shadow-[0_0_30px_rgba(247,244,239,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state === 'submitting' ? 'Sending…' : 'Send message →'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function FieldRow({
  label,
  error,
  required,
  isDark,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  isDark?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span
        className={
          isDark
            ? 'flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.18em] text-cream/55'
            : 'eyebrow flex items-center gap-1.5'
        }
      >
        {label}
        {required && <span className="text-vermilion">*</span>}
      </span>
      <div className="mt-2.5">{children}</div>
      {error && (
        <span className="mt-1.5 block text-xs text-vermilion">{error}</span>
      )}
    </label>
  )
}

function inputClass(hasError: boolean, isDark?: boolean) {
  if (isDark) {
    return [
      'block w-full rounded-2xl border bg-[#0F1418] px-5 py-3.5 text-base text-cream',
      'placeholder:text-cream/35 transition-colors',
      'focus:border-vermilion focus:outline-none focus:ring-2 focus:ring-vermilion/25',
      hasError ? 'border-vermilion' : 'border-cream/15',
    ].join(' ')
  }
  return [
    'block w-full rounded-2xl border bg-cream px-5 py-3.5 text-base text-ink',
    'placeholder:text-ink/35 transition-colors',
    'focus:border-vermilion focus:outline-none focus:ring-2 focus:ring-vermilion/20',
    hasError ? 'border-vermilion' : 'border-ink/15',
  ].join(' ')
}
