import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiDatabase, FiSmartphone } from 'react-icons/fi'

const stats = [
    { label: 'Year at SLIIT', value: '3rd' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Coffee Cups', value: '∞' },
]

const pillars = [
    { icon: FiCode, title: 'Frontend', desc: 'React, Next.js, Tailwind — pixel-perfect UIs.' },
    { icon: FiDatabase, title: 'Backend', desc: 'Node.js, Express, MongoDB, PostgreSQL.' },
    { icon: FiLayers, title: 'Full-stack', desc: 'End-to-end apps from idea to deployment.' },
    { icon: FiSmartphone, title: 'Responsive', desc: 'Flawless on every screen size.' },
]

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-cyan-400 font-mono">01. ABOUT ME</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        Get to <span className="gradient-text">Know Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-5 text-gray-300 leading-relaxed"
                    >
                        <p>
                            I'm <span className="text-white font-semibold">Mohammed Safran</span>, a Full-Stack Developer
                            and Year 3 IT undergraduate at <span className="text-cyan-400 font-medium">SLIIT</span>,
                            specializing in the <span className="text-white font-semibold">MERN stack</span>. I build
                            AI-powered applications, automation tools, and modern web solutions that solve real-world problems.
                        </p>
                        <p>
                            Through academic projects and hackathons, I've developed a strong foundation in software
                            engineering principles, database management, and cloud technologies. I'm passionate about
                            creating scalable, user-centric software with clean, maintainable code.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new tech, contributing to open source,
                            or working on side projects to sharpen my skills.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 text-center hover:border-cyan-400/40 transition"
                            >
                                <div className="text-4xl font-black gradient-text mb-1">{s.value}</div>
                                <div className="text-sm text-gray-400">{s.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Pillars */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {pillars.map((p, i) => {
                        const Icon = p.icon
                        return (
                            <motion.div
                                key={p.title}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass rounded-2xl p-6 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                                    <Icon className="text-white" size={22} />
                                </div>
                                <h3 className="font-semibold mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-400">{p.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}