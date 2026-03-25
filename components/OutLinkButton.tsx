"use client"

import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface OutLinkButtonProps {
  text: string
  link: string
  variant?: "default" | "secondary"
}

export default function OutLinkButton({
  link,
  text,
  variant = "default",
}: OutLinkButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size: "lg", variant }))}
    >
      <FontAwesomeIcon icon={faGithub} />
      {text}
    </a>
  )
}
