import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi'

const timeline = [
    {
        icon: FiBookOpen,
        title: 'BSc (Hons) in Information Technology',
        org: 'Sri Lanka Institute of Information Technology (SLIIT)',
        period: '2024 – 2028',
        desc: 'Year 3 undergraduate specializing in full-stack development, databases, and software design. Completed coursework in Full-Stack Development, Database Systems, Software Engineering, Cloud Computing, and Data Structures & Algorithms.',
        current: true,
    },
    {
        icon: FiAward,
        title: 'Hackathons & Certifications',
        org: 'Self-driven Learning',
        period: '2023 – Present',
        desc: 'Built AI-powered applications, automation tools, and modern web solutions through hackathons and personal projects. Continuously upskilling in AWS, Docker, and cloud technologies.',
    },
]

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-cyan-400 font-mono">04. EDUCATION</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent" />

                    {timeline.map((item, i) => {
                        const Icon = item.icon
                        const isLeft = i % 2 === 0
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ x: isLeft ? -60 : 60, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-row`}
                            >
                                <div className="hidden md:block md:w-1/2" />

                                {/* Node */}
                                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.current
                                            ? 'bg-gradient-to-br from-purple-500 to-cyan-500 animate-glow'
                                            : 'bg-[#0a0a1f] border-2 border-purple-500/50'
                                        }`}>
                                        <Icon className="text-white" size={16} />
                                    </div>
                                </div>

                                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="glass rounded-2xl p-6 hover:border-cyan-400/40 transition glow-border">
                                        <div className="flex items-center gap-2 text-xs text-cyan-400 mb-2 font-mono">
                                            <FiCalendar size={12} /> {item.period}
                                            {item.current && (
                                                <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                        <p className="text-sm text-purple-300 mb-3">{item.org}</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}