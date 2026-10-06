import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'E-Commerce Platform',
        desc: 'Full-stack MERN app with auth, cart, Stripe payments, and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        color: 'from-purple-600/30 to-pink-600/20',
        icon: '🛒',
    },
    {
        title: 'Task Manager App',
        desc: 'Real-time collaborative task board with drag & drop and WebSocket sync.',
        tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
        color: 'from-cyan-600/30 to-blue-600/20',
        icon: '📋',
    },
    {
        title: 'SLIIT Study Hub',
        desc: 'Student resource portal with notes sharing, past papers, and Q&A forum.',
        tech: ['React', 'Express', 'MySQL'],
        color: 'from-orange-600/30 to-red-600/20',
        icon: '📚',
    },
    {
        title: 'Weather Dashboard',
        desc: 'Location-aware weather app with animated 3D backgrounds and forecasts.',
        tech: ['React', 'Three.js', 'OpenWeather API'],
        color: 'from-emerald-600/30 to-teal-600/20',
        icon: '⛅',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-cyan-400 font-mono">03. PROJECTS</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        Things I've <span className="gradient-text">Built</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of projects showcasing my full-stack capabilities.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className={`glass rounded-2xl overflow-hidden group glow-border`}
                        >
                            <div className={`h-40 bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
                                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                                    {p.icon}
                                </span>
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            <div className="p-7">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold">{p.title}</h3>
                                    <div className="flex gap-3 text-gray-400">
                                        <a href="#" className="hover:text-cyan-400 transition" aria-label="GitHub">
                                            <FiGithub size={18} />
                                        </a>
                                        <a href="#" className="hover:text-cyan-400 transition" aria-label="Live demo">
                                            <FiExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 hover:border-cyan-400/50 hover:bg-white/5 transition"
                    >
                        <FiGithub /> See more on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}