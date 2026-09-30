'use client'

import Features from "@/components/landing/Features"
import Header from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"

function page() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <Hero />
      <Features />
    </div>
  )
}

export default page