"use client"

import { menu } from "@/lib/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileNav() {
  const path = usePathname()

  return (
    <div className="fixed right-5 bottom-6 left-5">
      <ul className="flex w-full justify-between overflow-x-auto rounded-2xl border border-border bg-secondary p-4">
        {menu.map((item) => {
          const isCurrentPage = path === item.link
          const { link, name, icon } = item

          return (
            <li key={name}>
              <Link
                href={link}
                className={`text flex flex-col items-center gap-1.5 text-xs transition-colors duration-300 ${isCurrentPage ? "text-primary hover:text-primary/80" : "text-muted-foreground hover:text-foreground"}`}
              >
                <FontAwesomeIcon icon={icon} widthAuto size="xl" />
                <span>{name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
