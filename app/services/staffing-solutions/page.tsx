import type { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Staffing Solutions',
  description:
    'Senior engineers, designers, and operators on demand. Vetted from a network we have been building since day one.',
}

export default function Page() {
  return <Content />
}
