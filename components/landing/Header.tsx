'use client'

import Image from "next/image"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { ArrowRight, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    if (!mounted) return null;

    const icon = resolvedTheme === "dark"
        ? "/Web-icon.png"
        : "/Dark-icon.png";

    return (
        <section className={`font-sans w-full flex flex-row items-center justify-center gap-3 p-3 fixed top-0 z-10
            ${scrolled? "bg-background transition" : "bg-transparent"}`}>
            
            <div className={`flex flex-row items-center justify-between w-full`}>
                <div className="flex flex-row items-center gap-4">   
                    <Image src="/Dark-icon.png" height={36} width={36} alt="Huenicorn-icon" className="idle cursor-pointer fadeIn" />      
                    <Link href="/" className="font-mono font-semibold text-lg cursor-pointer text-[#343D46] hovered fadeIn">
                        Worship & Wings
                    </Link>

                    <div className="lg:flex hidden flex-row items-center gap-6 ml-12 text-[#343D46]">
                        <Link href="/events" className="font-mono font-semibold text-sm cursor-pointer hover:text-foreground
                            hover:translate-y-[-3px] header-hovered fadeIn transition">
                            Events
                        </Link>
                        <Link href="/prayer-wall" className="font-mono font-semibold text-sm cursor-pointer hover:text-foreground
                            hover:translate-y-[-3px] header-hovered fadeIn transition">
                            Prayer
                        </Link>
                        <Link href="/verse-of-the-day" className="font-mono font-semibold text-sm cursor-pointer hover:text-foreground
                            hover:translate-y-[-3px] header-hovered fadeIn transition">
                            Verse
                        </Link>
                        <Link href="/journal" className="font-mono font-semibold text-sm cursor-pointer hover:text-foreground
                            hover:translate-y-[-3px] header-hovered fadeIn transition">
                            Journal
                        </Link>
                    </div>
                </div>

                {/* <ThemeToggle /> */}

                <Link href="/signin" className="font-sans lg:flex hidden fadeIn flex items-center gap-2 text-background button-hovered bg-foreground px-4 py-2 cursor-pointer
                    hover:text-foreground hover:bg-background/80 border border-foreground/20 transition duration-300 ease">
                    <span className="font-mono font-semibold text-xs ">
                        Sign in
                    </span>
                </Link> 

                <div className="lg:hidden flex flex-row items-center fadeIn"
                    onClick={() => setIsOpen(true)}>
                    <Menu size={22} className="text-[#343D46]" />
                </div> 

            </div>

            <div ref={menuRef} className={`w-full h-screen lg:hidden flex flex-col items-start justify-start gap-3 
                bg-[var(--background)] fixed top-0 left-0 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                ${!isOpen ? "translate-x-full" : "-translate-x-0"}`}>
                
                <div className="w-full flex flex-row items-center justify-between gap-3 py-4 px-3">
                    <ThemeToggle />
                    <X className="h-6 w-6 cursor-pointer hovered" onClick={() => setIsOpen(false)}/>
                </div>
                
                <div className="w-full flex flex-col items-center py-4 px-3">
                    <span className="font-sans text-md cursor-pointer hovered border-b border-foreground/20 p-3 w-full text-foreground/80">Events</span> 
                    <span className="font-sans text-md cursor-pointer hovered border-b border-foreground/20 p-3 w-full text-foreground/80">Prayer</span> 
                    <span className="font-sans text-md cursor-pointer hovered border-b border-foreground/20 p-3 w-full text-foreground/80">Verse</span>
                    <span className="font-sans text-md cursor-pointer hovered border-b border-foreground/20 p-3 w-full text-foreground/80">Journal</span>  
                </div>

                <div className="w-full bg-[var(--dark)] mt-auto flex flex-row items-center gap-3 justify-center py-4 px-3">
                    <Link href="/signin" className="w-full font-sans lg:hidden flex fadeIn flex items-center justify-center gap-2 text-background/80 button-hovered bg-foreground px-4 py-2 cursor-pointer
                        hover:text-foreground/80 hover:bg-background/80 border border-foreground/20 transition duration-300 ease">
                        <span className="font-mono font-semibold text-sm">
                            Sign in
                        </span>
                    </Link> 
                </div>

            </div>  
             

        </section>
    )

}

export default Header