'use client'

import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, SquareArrowOutUpRight } from "lucide-react"

function Hero() {

    
    return (
        <section className="w-full bg-background flex sm:flex-row flex-col items-center font-sans">
 
            <div className="relative object-contain">
                <Image src="/images/Hero.jpg" height={1200} width={2400} alt="" className="w-screen sm:h-[640px] h-[1080px] object-cover " />
                
                <div className="absolute sm:top-1/3 top-1/2 sm:-translate-y-1/3 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:px-0 px-3 left-0 z-0 sm:max-w-[1280px] 
                    w-full flex sm:flex-row flex-col sm:gap-3 gap-24 sm:mt-18 mt-0">

                    <div className="flex-4 flex flex-col gap-3 sm:mt-0 mt-24 sm:px-0 px-3">
                        <div className="sm:text-6xl text-5xl font-semibold text-[#343D46] flex flex-col">
                            <span>Let Faith</span>
                            <span>Take Flight</span>
                        </div>
                        
                        <span className="max-w-[540px] sm:text-lg text-md text-[#343D46]/80">A public space to discover worship gatherings, share prayers, reflect on verses, write journals and connect with a growing community.</span>
                        
                        <Link href="/signin" className="font-sans w-48 mt-6 fadeIn flex items-center justify-center gap-2 text-background button-hovered bg-foreground px-4 py-3 cursor-pointer
                            hover:text-foreground hover:bg-background/80 border border-foreground/20 transition duration-300 ease">
                            <span className="font-mono font-semibold text-sm">
                                Join Our Community
                            </span>
                        </Link> 
                    </div>

                    <div className="sm:flex-2 flex-1 relative overflow-hidden border border-foreground/20 bg-background p-8
                        dark:border-background dark:bg-background/80 sm:my-0 my-3 
                        hover:-translate-y-2 hover:shadow-lg transition duration-300 ease cursor-pointer">

                        <div className="relative font-sans">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Verse of the Day
                            </p>

                            <blockquote className="w-full font-sans text-3xl leading-relaxed tracking-tight">
                                “Be still, and know that I am God.”
                            </blockquote>

                            <p className="mt-6 text-sm font-medium text-muted-foreground">
                                Psalm 46:10
                            </p>

                            <div className="font-sans flex items-center justify-start gap-3 border-t border-black/5 pt-3 mt-3 dark:border-white/1">
                            
                                <button className="px-3 py-2 transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                                    <Heart className="h-5 w-5" />
                                </button>

                                <button className="px-3 py-2 transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                                    <MessageCircle className="h-5 w-5"  />
                                </button>

                                <button className="px-3 py-2 transition hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                                    <SquareArrowOutUpRight className="h-5 w-5"  />
                                </button>

                            </div>
                        </div>
                    </div>
                    

                </div>

                

            </div>
            
        </section>
    )
}

export default Hero