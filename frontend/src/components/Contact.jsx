import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Wire up to EmailJS / Formspree / your backend
        setSent(true)
        setTimeout(() => setSent(false), 3000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-cyan-400 font-mono">05. CONTACT</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8">
                    {/* Info side */}
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 space-y-4"
                    >
                        {[
                            { icon: FiMail, label: 'Email', value: 'safran@example.com', href: 'mailto:safran@example.com' },
                            { icon: FiPhone, label: 'Phone', value: '+94 XX XXX XXXX', href: 'tel:+94XXXXXXXXX' },
                            { icon: FiMapPin, label: 'Location', value: 'Colombo, Sri Lanka', href: '#' },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-cyan-400/40 transition group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition">
                                    <Icon className="text-white" size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                                    <div className="text-sm font-medium">{value}</div>
                                </div>
                            </a>
                        ))}
                    </motion.div>

                    {/* Form side */}
                    <motion.form
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="md:col-span-3 glass rounded-2xl p-7 space-y-5"
                    >
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="text-xs text-gray-400 mb-2 block">Name</label>
                                <input
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-400/50 focus:outline-none transition"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 mb-2 block">Email</label>
                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-400/50 focus:outline-none transition"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-400 mb-2 block">Message</label>
                            <textarea
                                required
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-400/50 focus:outline-none transition resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 font-medium hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition flex items-center justify-center gap-2"
                        >
                            {sent ? '✓ Message Sent!' : <>Send Message <FiSend /></>}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}