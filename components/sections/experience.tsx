"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
    {
        type: "education",
        title: "B.Tech in Computer Science & Engineering",
        organization: "Lovely Professional University",
        period: "Aug 2022 - May 2026",
        description: "Focusing on Cybersecurity, Software Engineering, and Advanced Algorithms.",
        skills: ["Cybersecurity", "Software Engineering", "DSA"]
    },
    {
        type: "education",
        title: "Intermediate (MPC)",
        organization: "Excellencia College",
        period: "Jun 2020 - May 2022",
        description: "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.",
        skills: ["Mathematics", "Physics", "Analytical Skills"]
    },
    {
        type: "education",
        title: "Secondary School Education",
        organization: "Sree Vidyaniketham International School",
        period: "Jun 2014 - May 2020",
        description: "Foundational education with strong emphasis on logical thinking and science.",
        skills: ["Foundational Science", "Communication", "Logical Reasoning"]
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        A timeline of my education and professional experience.
                    </p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                <Badge variant="outline" className="w-fit border-primary/30 text-primary bg-primary/5">
                                    {exp.period}
                                </Badge>
                                <span className="text-sm text-gray-500 flex items-center gap-1">
                                    {exp.type === 'education' ? <GraduationCap size={14} /> : <Briefcase size={14} />}
                                    {exp.type === 'education' ? 'Education' : 'Work'}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.organization}</h4>

                            <p className="text-gray-300 leading-relaxed mb-4 max-w-2xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="text-xs text-gray-500 bg-secondary/30 px-2 py-1 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
