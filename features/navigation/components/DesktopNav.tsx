"use client"

import { menu } from "@/lib/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion } from "motion/react"

export default function DesktopNav() {
  const path = usePathname()
  const [hoveredName, setHoveredName] = useState<string | null>(null)

  return (
    <div className="pointer-events-none fixed top-32 right-0 bottom-32 left-0 z-50 mx-auto hidden w-full max-w-[1400px] justify-end pr-10 lg:flex">
      <ul className="pointer-events-auto flex h-full flex-col gap-8 rounded-2xl">
        {menu.map((item) => {
          const isCurrentPage = path === item.link
          const isHovered = hoveredName === item.name
          const { link, name, icon } = item

          return (
            <li
              key={name}
              onMouseEnter={() => setHoveredName(item.name)}
              onMouseLeave={() => setHoveredName(null)}
            >
              <Link
                href={link}
                className={`group flex items-center justify-end gap-2 rounded-full p-3`}
              >
                <motion.span
                  initial={{ display: "none", opacity: 0, x: 20 }}
                  animate={{
                    display: isHovered ? "block" : "none",
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.2,
                    bounce: 0.7,
                    mass: 0.5,
                    type: "spring",
                  }}
                  className="pointer-events-none rounded-full bg-primary px-5 py-3 text-white"
                >
                  {name}
                </motion.span>
                <FontAwesomeIcon
                  className={`rounded-full p-3 transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-white ${isCurrentPage ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}
                  icon={icon}
                  widthAuto
                  size="xl"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
