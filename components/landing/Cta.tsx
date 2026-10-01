"use client";

import { ArrowUpRight, Heart } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative w-full px-3 my-6">
            <div
                className="
                    relative mx-auto flex w-full max-w-[1280px]
                    flex-col items-center justify-center
                    overflow-hidden
                    border border-foreground/20
                    bg-foreground
                    px-6 py-20
                    text-background
                    sm:px-12 sm:py-24
                "
            >
                {/* Decorative elements */}
                <div
                    className="
                        pointer-events-none absolute -left-24 -top-24
                        h-56 w-56 rounded-full
                        border border-background/10
                    "
                />

                <div
                    className="
                        pointer-events-none absolute -bottom-32 -right-24
                        h-72 w-72 rounded-full
                        border border-background/10
                    "
                />

                <div
                    className="
                        pointer-events-none absolute left-1/2 top-1/2
                        h-[500px] w-[500px]
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full
                        border border-background/[0.04]
                    "
                />

                {/* Icon */}
                <div
                    className="
                        relative mb-7 flex h-14 w-14
                        items-center justify-center
                        border border-background/20
                        bg-background/10
                    "
                >
                    <Heart
                        size={23}
                        strokeWidth={1.6}
                        className="text-background"
                    />
                </div>

                {/* Label */}
                <p className="relative mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
                    Come as you are
                </p>

                {/* Heading */}
                <h2
                    className="
                        relative max-w-3xl
                        text-center text-4xl
                        font-semibold leading-tight
                        tracking-tight
                        sm:text-5xl md:text-6xl
                    "
                >
                    There is always room
                    <br />
                    <span className="text-background/50">
                        at the table.
                    </span>
                </h2>

                {/* Description */}
                <p
                    className="
                        relative mt-6 max-w-xl
                        text-center text-md leading-7
                        text-background/65
                    "
                >
                    Worship & Wings is a place to gather, reflect, worship,
                    and share life with one another. Join us for the next
                    gathering and bring someone along.
                </p>

                {/* Buttons */}
                <div className="relative mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <button
                        className="
                            flex items-center justify-center gap-2
                            border border-background
                            bg-background
                            px-7 py-3.5
                            text-xs font-semibold uppercase
                            tracking-[0.12em]
                            text-foreground
                            transition duration-300 ease
                            hover:bg-transparent
                            hover:text-background
                            cursor-pointer
                        "
                    >
                        Join the community
                        <ArrowUpRight size={15} strokeWidth={2} />
                    </button>

                    <button
                        className="
                            flex items-center justify-center
                            border border-background/25
                            px-7 py-3.5
                            text-xs font-semibold uppercase
                            tracking-[0.12em]
                            text-background/80
                            transition duration-300 ease
                            hover:border-background/60
                            hover:text-background
                            cursor-pointer
                        "
                    >
                        Share with someone
                    </button>
                </div>

            </div>
        </section>
    );
}