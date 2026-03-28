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
    <main className="flex min-h-svh flex-col items-center pt-20">
      <div className="relative h-60 w-60 rounded-full border-4 border-secondary">
        <Image
          src={zee}
          alt="image of Arinze"
          priority
          className="h-full w-full overflow-hidden rounded-full object-cover object-top"
        />
        <div className="absolute right-6 bottom-3 size-6 rounded-full border-4 border-background bg-primary"></div>
      </div>
      <div className="mt-8 text-center">
        <div className="font-bold">
          <h1 className="text-3xl text-primary md:text-4xl">
            ARINZE OGBUNIBA.
          </h1>
          <TypewriterEffect
            words={words}
            className="text-2xl md:text-4xl"
            cursorClassName="bg-primary h-[18]"
          />
        </div>
        <p className="mt-4 mb-8 max-w-96 font-noto text-muted-foreground md:text-lg">
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
    </main>
  )
}
