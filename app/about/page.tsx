import CustomButton from "@/components/CustomButton"
import PageWrapper from "@/components/PageWrapper"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { techStack } from "@/lib/constants"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

export default function Page() {
  return (
    <PageWrapper title="ABOUT" highlight="ME">
      <section>
        <h2 className="text-xl font-semibold">PERSONAL INFOS</h2>
        <div className="mt-3 mb-4 space-y-3 font-noto text-muted-foreground">
          <p>
            I’m a frontend developer focused on building responsive,
            user-friendly web applications that feel fast, intuitive, and
            reliable.
          </p>
          <p>
            I enjoy turning ideas into real products, paying close attention to
            the details that shape how users interact with an interface. For me,
            it’s not just about making things work, but making them feel right.
          </p>
          <p>
            I primarily work with React and Next.js, and I’m intentional about
            writing clean, maintainable code that can scale as a project grows.
            I’m constantly improving how I structure applications and approach
            problem-solving, with the goal of building products that are both
            practical and polished.
          </p>
        </div>
        <CustomButton text="DOWNLOAD CV" icon={faDownload} />
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">TECH I WORK WITH</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {techStack.map((tech) => (
            <div
              className="relative inline-flex min-h-24 items-center justify-center gap-2 rounded-xl border border-primary/30 px-3 shadow shadow-primary/20"
              key={tech.name}
            >
              <GlowingEffect
                spread={80}
                glow={true}
                disabled={false}
                proximity={90}
                borderWidth={2}
              />
              <div className="h-8 w-8">
                <Image
                  src={tech.logo}
                  alt={`image of ${tech.name}`}
                  className="h-8 w-8 object-center"
                />
              </div>
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
