import { motion } from 'framer-motion'

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'Next.js', level: 82 },
            { name: 'JavaScript', level: 88 },
            { name: 'HTML5 / CSS3', level: 92 },
        ],
    },
    {
        title: 'Backend & Databases',
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Express.js', level: 84 },
            { name: 'MongoDB', level: 82 },
            { name: 'PostgreSQL', level: 78 },
        ],
    },
    {
        title: 'DevOps & Tools',
        skills: [
            { name: 'AWS / AWS Aurora', level: 75 },
            { name: 'Git / GitHub', level: 88 },
            { name: 'Docker', level: 72 },
            { name: 'Socket.IO / JWT', level: 80 },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-cyan-400 font-mono">02. SKILLS</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        My <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.title}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.15 }}
                            className="glass rounded-2xl p-7 glow-border"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                                {group.title}
                            </h3>
                            <div className="space-y-5">
                                {group.skills.map((s, i) => (
                                    <div key={s.name}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300">{s.name}</span>
                                            <span className="text-gray-500 font-mono">{s.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${s.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                                                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}