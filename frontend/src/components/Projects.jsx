import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'Real-Time Chat Application',
        desc: 'Full-stack real-time chat app with instant messaging, separate frontend/backend, and live client-server communication via WebSockets.',
        tech: ['React.js', 'Node.js', 'Express', 'Socket.IO'],
        color: 'from-purple-600/30 to-pink-600/20',
        icon: '💬',
        github: 'https://github.com/safran6ix',
    },
    {
        title: 'Ticket Verse System',
        desc: 'Java-based ticket management system applying core OOP principles to handle booking operations and workflows.',
        tech: ['Java', 'OOP', 'Collections'],
        color: 'from-cyan-600/30 to-blue-600/20',
        icon: '🎫',
        github: 'https://github.com/safran6ix',
    },
    {
        title: 'Movie Reservation System',
        desc: 'Web-based movie reservation & feedback platform with streamlined booking management and customer feedback collection.',
        tech: ['MERN', 'MongoDB', 'Express'],
        color: 'from-orange-600/30 to-red-600/20',
        icon: '🎬',
        github: 'https://github.com/safran6ix',
    },
    {
        title: 'Task Management System',
        desc: 'Full-stack task manager supporting create, update, delete, and organize tasks via a responsive web interface.',
        tech: ['MongoDB', 'Express', 'React', 'Node'],
        color: 'from-emerald-600/30 to-teal-600/20',
        icon: '✅',
        github: 'https://github.com/safran6ix',
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
                        href="https://github.com/safran6ix"
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