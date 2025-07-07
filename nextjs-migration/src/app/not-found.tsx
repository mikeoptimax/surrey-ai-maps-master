'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import SiteLayout from "@/components/site-layout"

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="headline-xl text-navy mb-8">
          404 - PAGE NOT FOUND
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl text-center">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track to find the SEO services you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="brutal-button">
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button asChild className="brutal-button bg-white text-navy border-navy">
            <Link href="/services">
              View Our Services
            </Link>
          </Button>
        </div>
      </div>
    </SiteLayout>
  )
}