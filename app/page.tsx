"use client"

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center overflow-hidden">
      {/* Purple orb background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/30 blur-[120px] opacity-50" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <section className="relative w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-20 text-center z-10">
        {/* Hero content */}
        <motion.header
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold tracking-tight sm:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text bg-300% animate-gradient">
              AI Agent Assistant
            </span>
          </motion.h1>
          <motion.p
            className="max-w-[600px] text-lg text-gray-400 md:text-xl/relaxed xl:text-2xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet your new AI chat companion that goes beyond conversation - it can actually get things done!
          </motion.p>
          <motion.p
            className="text-purple-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Powered by IBM&apos;s WxTools & your favourite LLM&apos;s.
          </motion.p>
        </motion.header>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SignedIn>
            <Link href="/dashboard">
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%", opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} forceRedirectUrl={"/dashboard"}>
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Sign Up</span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%", opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </SignInButton>
          </SignedOut>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { title: "Fast", description: "Real-time streamed responses" },
            {
              title: "Modern",
              description: "Next.js 15, Tailwind CSS, Convex, Clerk",
            },
            { title: "Smart", description: "Powered by Your Favourite LLM's" },
          ].map(({ title, description }, index) => (
            <motion.div
              key={title}
              className="relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-colors duration-300 group"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-2xl font-semibold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {title}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}

