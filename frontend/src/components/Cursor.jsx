import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY })
        const over = (e) => setHovering(e.target.closest('a, button, [data-hover]') !== null)

        window.addEventListener('mousemove', move)
        window.addEventListener('mouseover', over)
        return () => {
            window.removeEventListener('mousemove', move)
            window.removeEventListener('mouseover', over)
        }
    }, [])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0 : 1 }}
                transition={{ type: 'spring', stiffness: 1000, damping: 40 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full pointer-events-none z-[9998] hidden md:block"
                animate={{
                    x: pos.x - 20,
                    y: pos.y - 20,
                    scale: hovering ? 1.5 : 1,
                    borderColor: hovering ? '#22d3ee' : '#a78bfa'
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
        </>
    )
}