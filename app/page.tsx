import CustomButton from "@/components/CustomButton"
import zee from "@/assets/images/zee.png"
import Image from "next/image"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

const words = [
  {
    text: "FRONTEND",
  },
  {
    text: "DEVELOPER",
  },
]
export default function Page() {
  return (
    <div className="grid h-full grid-cols-1 items-center justify-items-center pt-20 lg:mr-20 lg:h-[calc(100svh-5rem)] lg:grid-cols-2 lg:justify-between lg:justify-items-normal lg:pt-8">
      <div className="relative h-60 w-60 rounded-full border-4 border-secondary lg:h-auto lg:w-96 lg:overflow-hidden lg:rounded-4xl">
        <Image
          src={zee}
          alt="image of Arinze"
          priority
          className="h-full w-full overflow-hidden rounded-full object-cover object-top lg:rounded-none"
        />
        <div className="absolute right-6 bottom-3 size-6 rounded-full border-4 border-background bg-primary lg:right-2 lg:bottom-2"></div>
      </div>
      <div className="mt-8 text-center lg:mt-0 lg:max-w-lg lg:text-left">
        <div className="font-bold">
          <h1 className="text-3xl text-primary md:text-4xl lg:mb-2 lg:text-5xl">
            ARINZE OGBUNIBA.
          </h1>
          <TypewriterEffect
            words={words}
            className="text-2xl md:text-3xl lg:text-left lg:text-4xl"
            cursorClassName="bg-primary h-[18] lg:h-6"
          />
        </div>
        <p className="mx-auto mt-4 mb-8 max-w-96 font-noto text-muted-foreground md:max-w-[400] md:text-lg lg:mx-0 lg:mt-6 lg:max-w-[450] lg:text-xl">
          I&apos;m a frontend developer who enjoys turning ideas into clean,
          interactive web experiences. I focus on performance, usability, and
          building products that people actually enjoy using
        </p>
        <CustomButton
          isInLink
          link="/projects"
          text="SEE PROJECTS"
          icon={faArrowRight}
        />
      </div>
    </div>
  )
}
