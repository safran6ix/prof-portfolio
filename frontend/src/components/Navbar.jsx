import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/10 py-3' : 'py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold gradient-text">
                    &lt;MS /&gt;
                </a>

                <ul className="hidden md:flex gap-8 text-sm">
                    {links.map((l) => (
                        <li key={l.name}>
                            <a href={l.href} className="text-gray-300 hover:text-white transition relative group">
                                {l.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-sm font-medium hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition"
                >
                    Let's Talk
                </a>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl mt-3 border-t border-white/10"
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {links.map((l) => (
                                <li key={l.name}>
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="text-gray-300 hover:text-cyan-400 transition"
                                    >
                                        {l.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}