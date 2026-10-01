"use client";

import { Heart, MessageCircle, ArrowUpRight } from "lucide-react";
import { PiHandsPraying } from "react-icons/pi"

const prayers = [
    {
        name: "Sarah",
        time: "2 hours ago",
        prayer:
        "Please pray for my family as we go through a difficult season. We are trusting God for strength and guidance.",
        prayers: 18,
        comments: 4,
    },
    {
        name: "Steve",
        time: "5 hours ago",
        prayer:
        "Please pray for everyone preparing for our upcoming Worship & Wings gathering. May it be a meaningful time of fellowship.",
        prayers: 12,
        comments: 3,
    },
    {
        name: "George",
        time: "Yesterday",
        prayer:
        "Praying for peace, wisdom, and courage as I begin a new chapter in my life.",
        prayers: 24,
        comments: 7,
    },
];

export default function PrayerWall() {
    return (
        <section className="relative py-12 w-full flex flex-col items-center">

            <div className="relative max-w-[1280px] w-full ">

                <div className="mb-12 sm:p-3 p-6 flex flex-col gap-3">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] ">
                        Community Prayer
                    </p>

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="flex flex-col gap-3">
                            <span className="text-3xl font-semibold">Prayer Wall</span>
                            <span className="sm:text-lg text-md ">
                                Share what is on your heart and stand with others in prayer.
                                Together, we can encourage one another through every season.
                            </span>
                        </div>

                        <button className="border border-foreground/20 py-3 cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] 
                            text-background bg-foreground hover:bg-background hover:text-foreground/80 transition duration-300 ease px-6
                            group flex flex-row items-center gap-3">
                            Share a prayer
                            <ArrowUpRight size={15} strokeWidth={2} />
                        </button>
                    </div>
                </div>


                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 cursor-pointer p-3">
                    {prayers.map((prayer, index) => (
                        <article key={index} className="flex min-h-[320px] flex-col border border-foreground/20 bg-white p-6 
                            transition duration-300 ease hover:-translate-y-2 hover:shadow-lg">

                            <div className="font-sans flex items-start justify-between">
                                <div>
                                    <p className="text-md font-semibold text-[#343D46]">
                                        {prayer.name}
                                    </p>

                                    <p className="mt-1 text-sm text-[#343D46]">
                                        {prayer.time}
                                    </p>
                                </div>

                                <div className="flex p-3 items-center justify-center bg-foreground/10">
                                    <PiHandsPraying size={24} className="text-[#343D46]"/>
                                </div>
                            </div>

                            <p className="mt-8 flex-1 text-md leading-7 text-[#343D46]">
                                “{prayer.prayer}”
                            </p>

                            <div className="mt-8 border-t border-[#e1e2e3] pt-5">
                                <div className="flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-sm text-[#68727b] transition-colors hover:text-[#303942]">
                                        <Heart size={18} strokeWidth={2} />
                                        <span>{prayer.prayers} Praying</span>
                                    </button>

                                    <button className="flex items-center gap-2 text-sm text-[#68727b] transition-colors hover:text-[#303942]">
                                        <MessageCircle size={18} strokeWidth={2} />
                                        <span>{prayer.comments}</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}