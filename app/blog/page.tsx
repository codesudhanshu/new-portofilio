import type { Metadata } from 'next'
import BlogContent from './Content'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on software development, digital marketing, and engineering talent from the Biech team.',
}

export default function BlogPage() {
  return <BlogContent />
}
