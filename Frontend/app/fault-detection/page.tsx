"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock, AlertTriangle, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      radius: number
      dx: number
      dy: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

export default function FaultDetectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Preventing Electrical Failures Before They Happen
          </motion.h1>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Hidden Cost of Electrical System Failures</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-white/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Downtime</h3>
                <p className="text-gray-400">Critical operations halted due to unexpected failures</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-white/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <AlertTriangle className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">Safety Risks</h3>
                <p className="text-gray-400">Potential hazards to personnel and equipment</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-white/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <DollarSign className="w-12 h-12 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">High Costs</h3>
                <p className="text-gray-400">Billions lost annually in unplanned maintenance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">AI-Driven Solutions for a Smarter, Safer Future</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
              <p className="text-gray-400 mb-6">
                Our AI continuously monitors electrical systems, detecting faults in real-time and predicting
                maintenance needs before failures occur.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Real-time fault detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Predictive maintenance scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Interactive 3D visualization</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              {/* Placeholder for 3D visualization */}
              <div className="aspect-square rounded-lg bg-black/50 border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Solution?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reduce Downtime",
                description: "Proactively address issues before they disrupt operations",
              },
              {
                title: "Cut Costs",
                description: "Save on emergency repairs and unplanned outages",
              },
              {
                title: "Enhance Safety",
                description: "Prevent electrical hazards and ensure compliance",
              },
              {
                title: "Improve Efficiency",
                description: "Optimize maintenance schedules and resource allocation",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-black/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Electrical System Management?</h2>
          <p className="text-gray-400 mb-8">
            Don't wait for the next failure. Take control with AI-driven insights today.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#">Company</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Documentation</Link>
              </li>
              <li>
                <Link href="#">Case Studies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest in AI and electrical system management.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

