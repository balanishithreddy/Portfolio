"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, CheckCircle2, ShieldCheck } from "lucide-react"
import Link from "next/link"

const certifications = [
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        status: "Verified",
        link: "https://drive.google.com/file/d/1qxq2dE-T-FLs6Sb7t510PM4PvXXBz8o1/view?usp=sharing",
        icon: ShieldCheck,
        color: "text-primary"
    },
    {
        title: "Quick Heal Malware Analyst",
        issuer: "Quick Heal Academy",
        status: "Verified",
        link: "https://drive.google.com/file/d/1zkPAY8n02Ne7eoARplEvbIp8KePotc0N/view?usp=sharing",
        icon: Award,
        color: "text-blue-500"
    }
]

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Professional <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Industry-recognized credentials validating expertise in security operations and threat analysis.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-secondary/20 border-white/5 hover:border-primary/30 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <cert.icon className="h-24 w-24" />
                                </div>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-black/40 border border-white/10 ${cert.color}`}>
                                        <cert.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-white group-hover:text-primary transition-colors text-xl">
                                            {cert.title}
                                        </CardTitle>
                                        <p className="text-sm text-gray-500">{cert.issuer}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between mt-2">
                                        <Badge variant="neon" className="bg-primary/5 border-primary/20 text-xs">
                                            <CheckCircle2 className="h-3 w-3 mr-1" /> {cert.status}
                                        </Badge>
                                        <Link
                                            href={cert.link}
                                            className="text-sm text-primary hover:underline font-mono"
                                            target="_blank"
                                        >
                                            VIEW_CREDENTIAL
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
