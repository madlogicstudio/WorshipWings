"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";

const journalEntries = [
    {
        title: "When We Learn to Be Still",
        date: "September 28, 2026",
        excerpt:
            "There are seasons when God does not ask us to move faster, but to become still enough to notice that He has been with us all along.",
        writer: "Marlee",
        readTime: "4 min read",
    },
    {
        title: "A Table Prepared for Everyone",
        date: "September 21, 2026",
        excerpt:
            "Worship is more than a song we sing. Sometimes it looks like making room at the table, listening to someone's story, and reminding them that they belong.",
        writer: "Julius",
        readTime: "5 min read",
    },
    {
        title: "Carrying Hope Into Ordinary Days",
        date: "September 14, 2026",
        excerpt:
            "Faith often grows quietly—in ordinary mornings, simple conversations, and the small moments where we choose hope again.",
        writer: "Zoey",
        readTime: "3 min read",
    },
];

export default function WorshipJournal() {
    return (
        <section className="relative w-full py-12">

            <div className="relative mx-auto w-full max-w-[1280px]">

                <div className="mb-12 sm:p-3 p-6 flex flex-col gap-3">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
                        Reflections & Stories
                    </p>

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="flex max-w-2xl flex-col gap-3">
                            
                            <span className="text-3xl font-semibold">
                                Worship Journal
                            </span>
                            
                            <span className="text-md sm:text-lg">
                                A collection of reflections, stories, and quiet
                                reminders to help us slow down, listen, and walk
                                faithfully through every season.
                            </span>
                        </div>

                        <button
                            className="
                                flex items-center justify-center gap-2
                                border border-foreground/20
                                bg-foreground px-6 py-3
                                text-xs font-semibold uppercase tracking-[0.12em]
                                text-background
                                transition duration-300 ease
                                hover:bg-background hover:text-foreground/80
                                cursor-pointer
                            "
                        >
                            View all journals
                            <ArrowUpRight size={15} strokeWidth={2} />
                        </button>

                    </div>

                </div>

                <div className="grid gap-3 p-3 md:grid-cols-2 lg:grid-cols-3">
                    {journalEntries.map((entry, index) => (
                        <article
                            key={index}
                            className="
                                group flex min-h-[360px] cursor-pointer flex-col
                                border border-foreground/20
                                bg-white p-6
                                transition duration-300 ease
                                hover:-translate-y-2 hover:shadow-lg
                            "
                        >
                            <div className="flex items-start justify-between">

                                <div className="flex flex-col gap-2">
                                    <p className="text-md font-semibold text-[#343D46]">
                                        {entry.writer}
                                    </p>
                                    <span className="text-sm text-[#343D46]">
                                        {entry.date}
                                    </span>
                                </div>
                                

                                <div className="flex items-center justify-center bg-foreground/10 p-3">
                                    <BookOpen
                                        size={23}
                                        strokeWidth={1.8}
                                        className="text-[#343D46]"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-1 flex-col">
                                <h3 className="text-2xl font-semibold leading-tight text-[#343D46]">
                                    {entry.title}
                                </h3>

                                <p className="mt-5 flex-1 text-md leading-7 text-[#343D46]">
                                    {entry.excerpt}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-[#e1e2e3] pt-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[#68727b]">
                                        {entry.readTime}
                                    </span>

                                    <div
                                        className="
                                            flex items-center gap-2
                                            text-sm text-[#68727b]
                                            transition-colors duration-300
                                            group-hover:text-[#303942]
                                        "
                                    >
                                        <span>Read journal</span>

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.8}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}