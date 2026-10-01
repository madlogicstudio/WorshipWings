"use client";

import { ArrowUpRight, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Donate() {
    return (
        <section className="relative w-full my-6">

            <Image src="/images/Donate.jpg" height={1200} width={2400} alt="" className="w-screen sm:h-[720px] h-[1200px] object-cover " />
            
            <div className="mx-auto w-full max-w-[1280px] px-3
                absolute sm:top-1/3 top-1/2 sm:-translate-y-1/4 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <div className="grid overflow-hidden border border-foreground/20 md:grid-cols-[1.15fr_0.85fr]">

                    {/* Left Content */}
                    <div className="relative flex flex-col justify-between bg-background/90 p-7 sm:p-10 lg:p-14">

                        {/* Small decorative circle */}
                        <div
                            className="
                                pointer-events-none absolute
                                -right-20 -top-20
                                h-48 w-48 rounded-full
                                border border-foreground/10
                            "
                        />

                        <div className="relative">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
                                Give & Support
                            </p>

                            <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                                Help us create more spaces for people to gather,
                                worship, and belong.
                            </h2>

                            <p className="mt-6 max-w-xl text-md leading-7 text-foreground/65 sm:text-lg">
                                Worship & Wings is built around community,
                                generosity, and shared moments. If you would
                                like to support what we are creating, your gift
                                can help make future gatherings and community
                                initiatives possible.
                            </p>
                        </div>

                        {/* Bottom Message */}
                        <div className="relative mt-12 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center bg-foreground/10">
                                <Heart
                                    size={18}
                                    strokeWidth={1.8}
                                    className="text-foreground/70"
                                />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">
                                    Every gift matters.
                                </span>

                                <span className="text-sm text-foreground/50">
                                    Give freely, give prayerfully.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Donation Card */}
                    <div className="flex flex-col justify-between border-t border-foreground/20 bg-foreground/90 p-7 text-background sm:p-10 md:border-l md:border-t-0 lg:p-12">

                        <div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/50">
                                    Make a difference
                                </p>

                                <div className="flex h-11 w-11 items-center justify-center border border-background/15 bg-background/10">
                                    <Sparkles
                                        size={19}
                                        strokeWidth={1.6}
                                        className="text-background/80"
                                    />
                                </div>
                            </div>

                            <h3 className="mt-10 text-2xl font-semibold">
                                Support Worship & Wings
                            </h3>

                            <p className="mt-4 text-md leading-7 text-background/55">
                                Your contribution helps us continue creating
                                meaningful gatherings and opportunities to
                                serve our community.
                            </p>
                        </div>

                        {/* Donation Options */}
                        <div className="mt-10 space-y-3">
                            <button
                                className="
                                    group flex w-full items-center
                                    justify-between
                                    border border-background/20
                                    px-5 py-4
                                    text-left
                                    transition duration-300 ease
                                    hover:border-background/50
                                    hover:bg-background/10
                                    cursor-pointer
                                "
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-md font-semibold">
                                        Give once
                                    </span>

                                    <span className="text-sm text-background/45">
                                        Make a one-time contribution
                                    </span>
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.8}
                                    className="
                                        transition-transform duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />
                            </button>

                            <button
                                className="
                                    group flex w-full items-center
                                    justify-between
                                    border border-background/20
                                    px-5 py-4
                                    text-left
                                    transition duration-300 ease
                                    hover:border-background/50
                                    hover:bg-background/10
                                    cursor-pointer
                                "
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-md font-semibold">
                                        Give regularly
                                    </span>

                                    <span className="text-sm text-background/45">
                                        Support us on a recurring basis
                                    </span>
                                </div>

                                <ArrowUpRight
                                    size={18}
                                    strokeWidth={1.8}
                                    className="
                                        transition-transform duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                    "
                                />
                            </button>
                        </div>

                        {/* Stripe */}
                        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.12em] text-background/30">
                            Secure giving powered by Stripe
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}