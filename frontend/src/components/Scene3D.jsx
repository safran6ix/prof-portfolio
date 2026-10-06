import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import { useRef, Suspense } from 'react'

function FloatingCore() {
    const group = useRef()
    const torus1 = useRef()
    const torus2 = useRef()

    useFrame((state) => {
        const t = state.clock.elapsedTime
        if (group.current) group.current.rotation.y = t * 0.15
        if (torus1.current) {
            torus1.current.rotation.x = t * 0.4
            torus1.current.rotation.y = t * 0.3
        }
        if (torus2.current) {
            torus2.current.rotation.x = -t * 0.3
            torus2.current.rotation.z = t * 0.5
        }
    })

    return (
        <group ref={group}>
            {/* Central distorted sphere */}
            <Sphere args={[1.1, 64, 64]}>
                <MeshDistortMaterial
                    color="#7c3aed"
                    emissive="#4c1d95"
                    emissiveIntensity={0.4}
                    roughness={0.15}
                    metalness={0.9}
                    distort={0.4}
                    speed={2}
                />
            </Sphere>

            {/* Orbiting torus 1 */}
            <Torus ref={torus1} args={[1.9, 0.03, 16, 100]}>
                <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
            </Torus>

            {/* Orbiting torus 2 */}
            <Torus ref={torus2} args={[2.4, 0.02, 16, 100]}>
                <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.5} />
            </Torus>
        </group>
    )
}

function Particles() {
    const points = useRef()
    const count = 300
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 15
    }

    useFrame((state) => {
        if (points.current) points.current.rotation.y = state.clock.elapsedTime * 0.05
    })

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#22d3ee" transparent opacity={0.6} sizeAttenuation />
        </points>
    )
}

export default function Scene3D() {
    return (
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={2} color="#a78bfa" />
            <pointLight position={[-5, -3, -5]} intensity={1.5} color="#06b6d4" />
            <pointLight position={[3, -5, 5]} intensity={1} color="#ec4899" />

            <Suspense fallback={null}>
                <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
                    <FloatingCore />
                </Float>
                <Particles />
                <Environment preset="night" />
            </Suspense>
        </Canvas>
    )
} 