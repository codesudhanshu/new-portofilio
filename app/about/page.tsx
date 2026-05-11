import type { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'A small Noida studio for software, marketing, and staffing. Senior people, fixed scopes, long horizons. Built by engineers who wanted the work to matter.',
}

export default function Page() {
  return <Content />
}
