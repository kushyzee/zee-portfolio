import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import { DialogDescription, DialogTitle } from "@/components/ui/dialog"
import CustomButton from "@/components/CustomButton"
import OutLinkButton from "@/components/OutLinkButton"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

interface ProjectCardTriggerProps extends ProjectCardDialogHeaderProps {
  techStack: string[]
  index: number
}

interface ProjectCardDialogHeaderProps {
  name: string
  desc: string
  image: StaticImageData
}

interface ProjectCardDialogFooterProps {
  live: string
  github: string
}

const getExcerpt = (text: string) => {
  if (text.length > 75) {
    return text.substring(0, 75) + "..."
  }

  return text
}

export default function ProjectCardTrigger({
  name,
  desc,
  image,
  index,
}: ProjectCardTriggerProps) {
  return (
    <Card className="group h-full cursor-pointer text-left shadow-md transition-shadow duration-300 ease-linear">
      <CardHeader className="-mt-6 w-full px-0">
        <div className="h-52 w-full">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
        <div className="mt-3 px-4">
          <CardTitle className="mb-2 text-lg font-medium transition-colors duration-300 ease-linear group-hover:text-primary">
            {name}
          </CardTitle>
          <CardDescription>{getExcerpt(desc)}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}

export function ProjectCardDialogHeader({
  desc,
  image,
  name,
}: ProjectCardDialogHeaderProps) {
  return (
    <>
      <div className="h-52 w-full">
        <Image
          src={image}
          alt={name}
          className="h-full w-full rounded-tl-4xl rounded-tr-4xl object-cover object-top"
        />
      </div>
      <div className="mt-2 px-6">
        <DialogTitle className="mb-2 text-lg font-semibold">{name}</DialogTitle>
        <DialogDescription>{desc}</DialogDescription>
      </div>
    </>
  )
}

export function ProjectCardDialogFooter({
  live,
  github,
}: ProjectCardDialogFooterProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <CustomButton
        isOutLink
        link={live}
        text="Preview"
        icon={faUpRightFromSquare}
      />
      <OutLinkButton link={github} text="Github" variant="secondary" />
    </div>
  )
}
