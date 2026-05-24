import { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Work — Biech',
  description:
    'Selected projects by Biech Software Solutions — software, digital marketing, and staffing.',
}

export default function WorkPage() {
  return <Content />
}
