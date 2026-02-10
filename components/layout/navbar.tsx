"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ResumeModal } from "@/components/ui/resume-modal"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isResumeOpen, setIsResumeOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-50 transition-all duration-300",
                    scrolled
                        ? "bg-background/80 backdrop-blur-md border-b border-white/10"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Shield className="h-8 w-8 text-primary" />
                            <span className="font-bold text-xl tracking-wider text-white">
                                BALA NISHITH REDDY
                            </span>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 hover:text-primary hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Button
                                    variant="neon"
                                    size="sm"
                                    className="ml-4"
                                    onClick={() => setIsResumeOpen(true)}
                                >
                                    Resume
                                </Button>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-4 pb-2">
                                    <Button
                                        variant="neon"
                                        className="w-full"
                                        onClick={() => {
                                            setIsOpen(false)
                                            setIsResumeOpen(true)
                                        }}
                                    >
                                        Resume
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    )
}
