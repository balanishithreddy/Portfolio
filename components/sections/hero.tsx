"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Grid */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for Hire
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            <span className="text-white">Secure the </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                Future
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                            <span className="text-white font-semibold italic">Aspiring</span> Computer Science Undergraduate specializing in <span className="text-primary">Cybersecurity</span> and <span className="text-white">Software Engineering</span>. Building robust, secure, and scalable solutions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="neon" size="lg" className="group" asChild>
                                <a href="#projects">
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5" asChild>
                                <a href="#contact">Contact Me</a>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-full blur-2xl -z-10" />
                            <div className="relative h-full w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-2 group overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-blue-600 z-20" />
                                <img
                                    src="/profile.png"
                                    alt="Bala Nishith Reddy"
                                    className="w-full h-full object-cover rounded-xl transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-3 font-mono text-[10px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex gap-1 mb-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-primary">$ status --check</div>
                                    <div className="text-green-500">{">>"} Security: ENFORCED</div>
                                    <div className="text-blue-400">{">>"} System: ACTIVE</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
