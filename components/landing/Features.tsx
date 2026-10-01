'use client'

import Link from "next/link"
import { Calendar, BookOpen, Pencil, ArrowRight } from "lucide-react"
import { PiHandsPraying } from "react-icons/pi"

function Features() {
    return (
        <section className="max-w-[1280px] w-full flex flex-col my-6">

            <div className="font-sans flex flex-col sm:p-3 p-6 gap-3 sm:mt-12 ">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    About Us
                </p>
                <span className="text-3xl font-semibold">What is Worship & Wings?</span>
                <span className="sm:text-lg text-md text-foreground/80">
                    Worship & Wings was developed and is managed by Juts and Elowen, with a simple purpose: to create a welcoming space where people can worship, pray, reflect, connect, and support one another.
                    We believe that faith can extend beyond a single gathering. Through worship events, the Prayer Wall, Verse of the Day, Worship Journal, and charitable initiatives, Worship & Wings gives everyone a place to share, encourage, and grow together.
                </span>
                
                <Link href="/signin" className="font-sans w-42 my-3 fadeIn flex items-center justify-center text-background button-hovered bg-foreground px-3 py-3 cursor-pointer hover:text-foreground hover:bg-background/80 border border-foreground/20 transition duration-300 ease">
                    <span className="group flex flex-row items-center gap-3 font-mono font-semibold text-sm">
                        Learn more
                        <ArrowRight size={18} />
                    </span>
                </Link> 
            </div>

            <div className="flex sm:flex-row flex-col items-center gap-3 p-3 py-3">

                <div className="relative overflow-hidden border border-foreground/20 bg-background p-12 sm:w-[360px] sm:h-[320px]
                    dark:bg-background sm:my-0 flex flex-col items-center justify-center gap-3 border
                    hover:-translate-y-2 hover:shadow-xl transition duration-300 ease cursor-pointer">
                    <div className="p-3 rounded-full bg-foreground/10">
                        <Calendar size={24} />
                    </div>
                    <span className="text-lg font-semibold">Events</span>
                    <span className="sm:text-lg text-md text-foreground/80 text-center">
                        Find upcoming worship nights, gatherings and more.
                    </span>
                </div>
                <div className="relative overflow-hidden border border-foreground/20 bg-background p-12 sm:w-[360px] sm:h-[320px]
                    dark:bg-background sm:my-0 flex flex-col items-center justify-center gap-3 border
                    hover:-translate-y-2 hover:shadow-xl transition duration-300 ease cursor-pointer">
                    <div className="p-3 rounded-full bg-foreground/10">
                        <PiHandsPraying size={28} />
                    </div>
                    <span className="text-lg font-semibold">Prayer Wall</span>
                    <span className="sm:text-lg text-md text-foreground/80 text-center">
                        Share prayer and encourage someone in their journey.
                    </span>
                </div>
                <div className="relative overflow-hidden border border-foreground/20 bg-background p-12 sm:w-[360px] sm:h-[320px]
                    dark:bg-background sm:my-0 flex flex-col items-center justify-center gap-3 border
                    hover:-translate-y-2 hover:shadow-xl transition duration-300 ease cursor-pointer">
                    <div className="p-3 rounded-full bg-foreground/10">
                        <BookOpen size={24} />
                    </div>
                    <span className="text-lg font-semibold">Verse of the day</span>
                    <span className="sm:text-lg text-md text-foreground/80 text-center">
                        Receive daily scripture for encouragement and carry throughout the day.
                    </span>
                </div>
                <div className="relative overflow-hidden border border-foreground/20 bg-background p-12 sm:w-[360px] sm:h-[320px]
                    dark:bg-background sm:my-0 flex flex-col items-center justify-center gap-3 border
                    hover:-translate-y-2 hover:shadow-xl transition duration-300 ease cursor-pointer">
                    <div className="p-3 rounded-full bg-foreground/10">
                        <Pencil size={24} />
                    </div>
                    <span className="text-lg font-semibold">Worship Journal</span>
                    <span className="sm:text-lg text-md text-foreground/80 text-center">
                        Reflect, share and be inspired by other's journey.
                    </span>
                </div>

            </div>

        </section>
    )
}

export default Features