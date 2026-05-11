import type { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about your project. We answer every message within one working day. Noida-based, working globally.',
}

export default function Page() {
  return <Content />
}
