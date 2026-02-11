"use client"

import { useParams, useRouter } from "next/navigation"
import { projects } from "@/lib/projects-data"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { ArrowLeft, ExternalLink, Shield, Lock, Terminal, ShieldAlert, Cpu } from "lucide-react"
import Link from "next/link"

export default function ProjectPage() {
    const { slug } = useParams()
    const router = useRouter()
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <ShieldAlert className="h-16 w-16 text-red-500 mb-4 animate-pulse" />
                <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
                <p className="text-gray-400 mb-8">The requested digital asset could not be found or access has been revoked.</p>
                <Button variant="neon" onClick={() => router.push('/')}>Return to Base</Button>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
            <Navbar />

            <div className="pt-24 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primary/70 mb-8 transition-colors font-mono">
                        <ArrowLeft className="h-4 w-4" />
                        _REVERSE_DNS_PTR
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-secondary/30 border border-primary/20">
                                <Lock className="h-8 w-8 text-primary" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                {project.title}
                            </h1>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="bg-secondary/50 text-gray-300">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-gray-400 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8 mb-8">
                                <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Terminal className="h-5 w-5 text-primary" /> System Overview
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Status Card */}
                        <div className="bg-card/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Deployment_Status</h4>

                            {project.status === 'live' ? (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-green-500 font-mono">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                                        SYSTEMS_NOMINAL
                                    </div>
                                    <p className="text-sm text-gray-400">The application is currently deployed and serving traffic from primary load balancers.</p>
                                    <Button variant="neon" className="w-full group" asChild>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            Access Live Asset
                                            <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </a>
                                    </Button>
                                </div>
                            ) : project.status === 'maintenance' ? (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-yellow-500 font-mono">
                                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                        UNDER_MAINTENANCE
                                    </div>
                                    <p className="text-sm text-gray-400">System is currently undergoing security patching and database optimization.</p>
                                    <Button disabled className="w-full bg-yellow-500/10 border-yellow-500/20 text-yellow-500/50">
                                        LOCKED_FOR_SERVICE
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-red-500 font-mono">
                                        <Shield className="h-4 w-4" />
                                        ADMIN_RESTRICTED
                                    </div>
                                    <p className="text-sm text-gray-400">Access to this repository has been restricted by administrative policy due to sensitive data regulations.</p>
                                    <Button disabled variant="outline" className="w-full border-red-500/20 text-red-500/50">
                                        ENFORCED_BLOCK
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Specs Card */}
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Hardware_Specs</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Infrastructure</span>
                                    <span className="text-gray-300">Cloud-Native</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Encryption</span>
                                    <span className="text-gray-300">AES-256-GCM</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">SLA_Uptime</span>
                                    <span className="text-gray-300">99.9%</span>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Card */}
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6">
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Cpu className="h-4 w-4" /> Core_Modules
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono text-primary/70 border border-primary/20 px-2 py-0.5 rounded uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}
