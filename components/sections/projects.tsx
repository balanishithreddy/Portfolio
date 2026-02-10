"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Lock, Shield } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "SecureChat Application",
        description: "End-to-end encrypted messaging platform built with React and Socket.io. Features include self-destructing messages and multi-factor authentication.",
        tags: ["React", "Node.js", "Socket.io", "Cryptography"],
        featured: true
    },
    {
        title: "Vulnerability Scanner",
        description: "Automated Python script for scanning common web vulnerabilities (XSS, SQLi) in target URLs. Generates detailed PDF reports.",
        tags: ["Python", "Selenium", "Owasp ZAP", "Automation"],
        featured: false
    },
    {
        title: "IDS: Intrusion Detection System",
        description: "Real-time network monitoring tool that detects unauthorized access attempts and logs anomalies using signature-based detection.",
        tags: ["C++", "Networking", "Security", "Linux"],
        featured: true
    },
    {
        title: "Malware Analysis Lab",
        description: "A sandbox environment for safe execution and behavioral analysis of malicious software, documenting API calls and network activity.",
        tags: ["Virtualization", "Wireshark", "Reverse Engineering"],
        featured: false
    },
    {
        title: "Blockchain Voting System",
        description: "Decentralized voting platform ensuring transparency and tamper-proof records using Solidity and Ethereum smart contracts.",
        tags: ["Solidity", "Web3.js", "Ethereum"],
        featured: false
    },
    {
        title: "Zero Trust Architecture Demo",
        description: "Implementation of a Zero Trust security model for internal microservices, featuring identity-based access control.",
        tags: ["Go", "gRPC", "mTLS", "IAM"],
        featured: false
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Security <span className="text-primary">Portfolio</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        A comprehensive list of projects showcasing expertise in cybersecurity and software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card/50 border-white/5 hover:border-primary/50 transition-colors h-full flex flex-col backdrop-blur-sm group overflow-hidden">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Lock className="h-8 w-8 text-primary group-hover:animate-pulse" />
                                        {project.featured && <Badge variant="neon">Priority</Badge>}
                                    </div>
                                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-gray-300">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-4 border-t border-white/5 bg-black/20">
                                    <div className="flex items-center gap-2 text-xs font-mono text-red-500/80 uppercase tracking-widest animate-pulse">
                                        <Shield className="h-3 w-3" />
                                        Administrator has blocked the site
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="link" className="text-primary text-lg" asChild>
                        <Link href="https://github.com/balanishithreddy" target="_blank">
                            Access Secure Vault <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
