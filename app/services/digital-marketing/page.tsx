import type { Metadata } from 'next'
import Content from './Content'

export const metadata: Metadata = {
  title: 'Digital Marketing',
  description:
    'Search, performance, content, lifecycle. We run the channels where the maths works — and we show you the maths every month.',
}

export default function Page() {
  return <Content />
}
