import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 px-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <div className="text-xl font-bold gradient-text mb-1">&lt;MS /&gt;</div>
                    <p className="text-sm text-gray-500">Mohammed Safran — Full-stack Developer</p>
                </div>

                <div className="flex gap-4">
                    {[
                        { icon: FiGithub, href: 'https://github.com/yourusername' },
                        { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername' },
                        { icon: FiInstagram, href: 'https://instagram.com/yourusername' },
                        { icon: FiMail, href: 'mailto:safran@example.com' },
                    ].map(({ icon: Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition"
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                </div>

                <p className="text-xs text-gray-500 text-center md:text-right">
                    © {new Date().getFullYear()} Mohammed Safran.<br />
                    Built with React, Three.js & 💜
                </p>
            </div>
        </footer>
    )
}