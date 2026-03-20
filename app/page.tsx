import CustomButton from "@/components/CustomButton"
import { ArrowRight } from "lucide-react"
import zee from "@/assets/images/zee.png"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center pt-20 pb-32">
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
          <h1 className="text-3xl text-primary">ARINZE OGBUNIBA.</h1>
          <p className="text-2xl">FRONTEND DEVELOPER</p>
        </div>
        <p className="mt-4 mb-8 max-w-96 font-noto text-muted-foreground">
          I&apos;m a frontend developer who enjoys turning ideas into clean,
          interactive web experiences. I focus on performance, usability, and
          building products that people actually enjoy using
        </p>
        <Link href="/projects">
          <CustomButton text="SEE PROJECTS">
            <ArrowRight />
          </CustomButton>
        </Link>
      </div>
    </div>
  )
}
