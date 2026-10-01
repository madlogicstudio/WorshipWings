'use client'

import Image from "next/image"
import RSVPCard from "./RsvpCard"

function Events() {
    return (
        <section className='relative h-auto w-full mb-12 bg-[#e9e9e7] flex flex-col items-center py-12'>

            <div className="sm:px-0 px-3 left-0 z-0 max-w-[1280px] w-full flex flex-col justify-start gap-3 px-3">
                
                <div className="font-sans flex flex-col sm:p-3 p-6 py-6 gap-3 text-[#343D46]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] ">
                        Upcoming Events
                    </p>
                    <span className="text-3xl font-semibold">Gatherings</span>
                    <span className="sm:text-lg text-md ">Join us for meaningful moments of worship, fellowship and community.</span>
                </div>
                
                <div className="w-full flex sm:flex-row flex-col items-center gap-3 overflow-x-auto">
                    <RSVPCard />
                    <RSVPCard />
                </div>
                

            </div>

        </section>
    )
}

export default Events