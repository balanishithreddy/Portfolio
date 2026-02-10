"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const resumes = [
        {
            title: "Specialized CV",
            description: "Cybersecurity & Software Engineering focus",
            link: "https://drive.google.com/file/d/15_Svj2Mahsqanx6V_mp4cp-YLbfcZyve/view?usp=sharing",
            variant: "neon" as const,
        },
        {
            title: "Generic CV",
            description: "Full Stack & General Developer focus",
            link: "https://drive.google.com/file/d/1rw98mOp75B0CoIC-UccGn0AVUFSirycK/view?usp=sharing",
            variant: "outline" as const,
        }
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-secondary/30 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Select Resume Version</h2>
                            <p className="text-gray-400">Choose the version that best matches your interests.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {resumes.map((resume) => (
                                <div
                                    key={resume.title}
                                    className="group relative"
                                >
                                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    <a
                                        href={resume.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 block"
                                    >
                                        <div className="flex-shrink-0 p-3 rounded-lg bg-black/40 border border-white/10 text-primary">
                                            <FileText className="h-6 w-6" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                                                {resume.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 italic">
                                                {resume.description}
                                            </p>
                                        </div>
                                        <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-primary transition-colors" />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Button variant="ghost" onClick={onClose} className="text-gray-400 hover:text-white">
                                Cancel
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
