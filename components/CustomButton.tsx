"use client"

import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
interface CustomButtonProps {
  text?: string
  link?: string
  isInLink?: boolean
  isOutLink?: boolean
  isSubmitting?: boolean
  type?: "button" | "submit"
  icon: IconProp
}

export default function CustomButton({
  text,
  link,
  isInLink,
  isOutLink,
  isSubmitting,
  type,
  icon,
}: CustomButtonProps) {
  const buttonClass =
    "mt-2 rounded-full pr-0 shadow-primary/60 transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg"

  const iconClass =
    "inline-flex h-full w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"

  if (isInLink && link) {
    return (
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          buttonClass
        )}
      >
        {text}{" "}
        <div className={iconClass}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </Link>
    )
  }

  if (isOutLink && link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          buttonClass
        )}
      >
        {text}
        <div className={iconClass}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </a>
    )
  }

  return (
    <Button
      disabled={isSubmitting}
      variant="outline"
      size="lg"
      className={buttonClass}
      type={type || "button"}
    >
      {text}
      <div className={iconClass}>
        <FontAwesomeIcon icon={icon} beat={isSubmitting} />
      </div>
    </Button>
  )
}
