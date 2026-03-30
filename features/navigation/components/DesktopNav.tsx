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
    <div className="fixed top-32 right-12 bottom-32 z-50 hidden lg:block">
      <ul className="flex h-full flex-col gap-8 rounded-2xl">
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
                  className="pointer-events-none rounded-full bg-primary px-5 py-3 text-foreground"
                >
                  {name}
                </motion.span>
                <FontAwesomeIcon
                  className={`rounded-full p-3 transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-foreground ${isCurrentPage ? "bg-primary text-foreground" : "bg-secondary text-muted-foreground"}`}
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
