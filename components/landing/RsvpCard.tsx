'use client'

import { Clock, MapPin, Users } from "lucide-react"

export default function RSVPCard() {
    return (
        <article className="group font-sans w-full min-w-xs border border-gray-300 bg-white transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">

            <div className="relative p-7">
                <div className="absolute right-5 top-5 bg-white px-4 py-3 text-center border border-foreground/20">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Oct
                    </span>
                    <span className="block font-mono text-2xl font-semibold text-gray-800">
                        18
                    </span>
                </div>

                <h3 className="text-2xl text-gray-800 pr-16">
                    An Evening of Worship
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500 pr-16">
                    Join us for an evening of worship, prayer, fellowship, and meaningful moments together.
                </p>

                <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>6:00 PM — 9:00 PM</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin size={18} />
                    <span>Grace Community Hall</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Users size={18} />
                    <span>32 people are attending</span>
                </div>
                </div>

                <div className="font-sans mt-7 flex gap-3">
                    <button className=" flex-1 border border-foreground/20 py-3 cursor-pointer text-sm font-semibold tracking-[0.12em] 
                        text-background bg-foreground hover:bg-background hover:text-foreground/80 transition duration-300 ease">
                        View Invitation
                    </button>
                </div>
            </div>
        </article>
    );
}