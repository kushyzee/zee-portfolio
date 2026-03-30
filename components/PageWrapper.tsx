"use client"

import { motion } from "motion/react"

interface PageWrapperProps {
  title: string
  highlight: string
  children: React.ReactNode
}

export default function PageWrapper({
  title,
  highlight,
  children,
}: PageWrapperProps) {
  return (
    <div className="min-h-svh pt-20 lg:pr-28">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-20 text-3xl font-extrabold lg:text-center lg:text-5xl"
      >
        {title} <span className="text-primary">{highlight}</span>
      </motion.h1>
      {children}
    </div>
  )
}
