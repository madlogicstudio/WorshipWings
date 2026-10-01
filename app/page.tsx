'use client'

import Events from "@/components/landing/Events"
import Features from "@/components/landing/Features"
import Header from "@/components/landing/Header"
import Hero from "@/components/landing/Hero"
import PrayerWall from "@/components/landing/PrayerWall"
import WorshipJournal from "@/components/landing/Journal"
import CTA from "@/components/landing/Cta"
import Donate from "@/components/landing/Donate"
import Footer from "@/components/landing/Footer"

function page() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <Hero />
      <Features />
      <Events />
      <PrayerWall />
      <WorshipJournal />
      <Donate />
      <CTA />
      <Footer />
    </div>
  )
}

export default page