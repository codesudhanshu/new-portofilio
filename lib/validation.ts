import { z } from 'zod'

export const SERVICE_OPTIONS = [
  { value: 'software', label: 'Software Development' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'staffing', label: 'Staffing Solutions' },
  { value: 'other', label: 'Something else' },
] as const

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Please share your name')
    .max(120, 'Keep it under 120 characters'),
  email: z.string().email('That email looks off'),
  phone: z
    .string()
    .max(30)
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(160)
    .optional()
    .or(z.literal('')),
  service: z
    .enum(['software', 'marketing', 'staffing', 'other'])
    .optional(),
  message: z
    .string()
    .min(10, 'Tell us a little more — even a sentence helps')
    .max(2000, 'Under 2000 characters please'),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>
