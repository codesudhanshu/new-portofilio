import type { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Software Development',
  description:
    'Web platforms, mobile apps, internal tools, integrations — engineered with the boring discipline that keeps systems running five years from now.',
}

export default function Page() {
  return <Content />
}
