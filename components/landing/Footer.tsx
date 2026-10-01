"use client";

import {
    ArrowUpRight,
    Mail,
    Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

export default function Footer() {

    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
        if (!mounted) return null;

    const icon = resolvedTheme === "dark"
        ? "/Web-icon.png"
        : "/Dark-icon.png";

    return (
        <footer className="w-full border-t border-foreground/20">
            <div className="mx-auto w-full max-w-[1280px] px-3">

                {/* Main Footer */}
                <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-[1.4fr_0.6fr_0.6fr]">

                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <Image src={icon} height={32} width={32} alt="Huenicorn-icon" className="idle cursor-pointer fadeIn" />      
                            <Link href="/" className="font-mono font-semibold text-lg cursor-pointer text-foreground hovered fadeIn">
                                Worship & Wings
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="mt-5 max-w-md text-md leading-7 text-foreground/60">
                                A space to gather, worship, reflect, and walk
                                alongside one another through every season.
                            </p>

                            <ThemeToggle />
                        </div>

                    </div>

                    {/* Explore */}
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em]">
                            Explore
                        </p>

                        <nav className="flex flex-col items-start gap-3">
                            <a
                                href="#about"
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                About
                            </a>

                            <a
                                href="#gatherings"
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                Gatherings
                            </a>

                            <a
                                href="#prayer"
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                Prayer Wall
                            </a>

                            <a
                                href="#journal"
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                Worship Journal
                            </a>

                            <a
                                href="#donate"
                                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                Give & Support
                            </a>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em]">
                            Connect
                        </p>

                        <div className="flex flex-col items-start gap-3">

                            <a
                                href="#"
                                className="group flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                <FaInstagram
                                    size={16}
                                    strokeWidth={1.7}
                                />
                                Instagram
                                <ArrowUpRight
                                    size={13}
                                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                />
                            </a>

                            <a
                                href="mailto:hello@worshipandwings.com"
                                className="group flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"
                            >
                                <Mail
                                    size={16}
                                    strokeWidth={1.7}
                                />
                                Get in touch
                                <ArrowUpRight
                                    size={13}
                                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-foreground/15 py-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-sm text-foreground/45">
                            © {new Date().getFullYear()} Worship & Wings.
                            All rights reserved.
                        </p>

                        <div className="flex items-center gap-5">
                            <a
                                href="#"
                                className="text-sm text-foreground/45 transition-colors hover:text-foreground"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="text-sm text-foreground/45 transition-colors hover:text-foreground"
                            >
                                Terms
                            </a>

                            <span className="hidden h-3 w-px bg-foreground/20 sm:block" />

                            <span className="group flex flex-row items-center gap-2 text-sm text-foreground/40">
                                Made with <Heart size={16} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}