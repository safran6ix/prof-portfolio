import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import Scene3D from './Scene3D'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-[#050510] to-cyan-950/30" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs mb-6"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Available for opportunities
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6">
                        Hi, I'm{' '}
                        <span className="gradient-text">Safran</span>
                        <br />
                        <span className="text-3xl md:text-5xl text-gray-400 font-semibold">
                            Full-stack Developer
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Year 3 IT undergraduate at SLIIT, building AI-powered apps and full-stack
                        solutions with the <span className="text-cyan-400 font-medium">MERN stack</span>. Passionate about scalable,
                        user-centric software.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-7 py-3 rounded-full border border-white/20 hover:bg-white/5 hover:border-cyan-400/50 transition flex items-center gap-2"
                        >
                            <FiDownload /> Resume
                        </a>
                    </div>

                    <div className="flex gap-5">
                        {[
                            { icon: FiGithub, href: 'https://github.com/safran6ix' },
                            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/safran-mohammed-985a412a0/' },
                            { icon: FiMail, href: 'mailto:mohammedsafran6ix@gmail.com' },
                        ].map(({ icon: Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -4, scale: 1.1 }}
                                className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.3 }}
                    className="h-[450px] md:h-[600px] relative"
                >
                    <Scene3D />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-400 to-transparent" />
            </motion.div>
        </section>
    )
}