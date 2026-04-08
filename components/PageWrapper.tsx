"use client"

import { motion } from "motion/react"

interface PageWrapperProps {
  title: string
  highlight: string
  children: React.ReactNode
}

export const pageVariants = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function PageWrapper({
  title,
  highlight,
  children,
}: PageWrapperProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-svh pt-20 lg:pr-28"
    >
      <h1 className="mb-20 text-3xl font-extrabold lg:text-center lg:text-5xl">
        {title} <span className="text-primary">{highlight}</span>
      </h1>
      {children}
    </motion.div>
  )
}
