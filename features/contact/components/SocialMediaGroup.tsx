"use client"

import { LinkPreview } from "@/components/ui/link-preview"
import {
  faLinkedinIn,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const socialMedia = [
  {
    label: "Whatsapp",
    link: "https://wa.me/2348108882679",
    icon: faWhatsapp,
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/arinze-ogbuniba-5b89a1b5",
    icon: faLinkedinIn,
  },
  {
    label: "Twitter",
    link: "https://x.com/zeecodez",
    icon: faXTwitter,
  },
]

export default function SocialMediaGroup() {
  return (
    <div className="mt-8 flex items-center gap-3">
      {socialMedia.map((item) => (
        <LinkPreview
          key={item.label}
          url={item.link}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary p-3"
          aria-label={item.label}
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg" />
        </LinkPreview>
      ))}
    </div>
  )
}
