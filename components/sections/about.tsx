"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Terminal, Code2 } from "lucide-react"

const skills = [
    "Network Security", "Penetration Testing", "Python", "JavaScript/TypeScript",
    "React & Next.js", "Cryptography", "Linux Administration", "Cloud Security (Azure/AWS)",
    "SQL & NoSQL", "Docker & Kubernetes", "CI/CD Pipelines", "Ethical Hacking"
]

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Passionate about securing digital infrastructures and building resilient software systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a dedicated Computer Science student with a keen focus on <strong className="text-primary font-semibold">Cybersecurity</strong> and <strong className="text-primary font-semibold">Software Engineering</strong>.
                            My journey began with a curiosity about how systems break, which evolved into a passion for making them unbreakable.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I combine theoretical knowledge with hands-on experience in vulnerability assessment, secure coding practices, and full-stack development.
                            I am constantly learning and adapting to the ever-evolving threat landscape.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 bg-secondary/30 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                                <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                                <h3 className="font-semibold text-white">Security Audits</h3>
                                <p className="text-sm text-gray-400">Identifying and mitigating risks.</p>
                            </div>
                            <div className="p-4 bg-secondary/30 rounded-lg border border-white/5 hover:border-primary/50 transition-colors">
                                <Code2 className="h-8 w-8 text-blue-500 mb-2" />
                                <h3 className="font-semibold text-white">Secure Dev</h3>
                                <p className="text-sm text-gray-400">Writing clean, safe code.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Terminal className="h-5 w-5 text-primary" /> Technical Arsenal
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-secondary/40 border border-white/5 rounded-md p-3 text-center text-sm font-medium text-gray-300 hover:text-primary hover:border-primary/30 transition-colors cursor-default select-none"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-br from-secondary/50 to-primary/5 rounded-xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="w-24 h-24 text-primary" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">My Philosophy</h4>
                            <p className="text-gray-400 italic">&quot;Security is not a product, but a process. It requires constant vigilance and a proactive mindset.&quot;</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


