import { Metadata } from 'next'
import BookCallPage from './BookCallPage'

export const metadata: Metadata = {
  title: 'Book a Free SEO Strategy Call | OptiMAX-AI',
  description: 'Schedule your free 30-minute SEO consultation. Get a custom roadmap to dominate Google in Surrey. Only 7 founding client spots left.',
  openGraph: {
    title: 'Book Your Free SEO Strategy Call',
    description: 'Get a custom SEO roadmap for your Surrey business. Free consultation, no obligation.',
  }
}

export default function Page() {
  return <BookCallPage />
}