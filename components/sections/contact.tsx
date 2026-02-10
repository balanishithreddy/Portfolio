"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <footer id="contact" className="bg-secondary/10 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                            Let&apos;s <span className="text-primary">Connect</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            I&apos;m currently looking for internships and opportunities in cybersecurity and software engineering. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>

                        <div className="flex gap-4">
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all text-gray-400" asChild>
                                <Link href="https://github.com/balanishithreddy" target="_blank" aria-label="GitHub">
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-600/20 hover:text-blue-500 hover:border-blue-500/50 transition-all text-gray-400" asChild>
                                <Link href="https://www.linkedin.com/in/bala-nishith-reddy-eedara" target="_blank" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/50 transition-all text-gray-400" asChild>
                                <Link href="mailto:contact@example.com" aria-label="Email">
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5"
                    >
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <input type="text" id="name" className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <input type="email" id="email" className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <input type="text" id="subject" className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-secondary/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your message here..." />
                            </div>
                            <Button variant="neon" className="w-full">Send Message</Button>
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Bala Nishith Reddy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
