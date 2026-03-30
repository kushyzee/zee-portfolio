import PageWrapper from "@/components/PageWrapper"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { projects } from "@/lib/constants"
import TechStackGrid from "@/features/projects/components/TechStackGrid"
import ProjectCardTrigger, {
  ProjectCardDialogFooter,
  ProjectCardDialogHeader,
} from "@/features/projects/components/ProjectCard"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function Page() {
  return (
    <PageWrapper title="MY" highlight="PROJECTS">
      <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-6">
        {projects.map((item, index) => (
          <Dialog key={item.name}>
            <DialogTrigger className="relative h-full rounded-2xl">
              <GlowingEffect
                spread={80}
                glow={true}
                disabled={false}
                proximity={90}
                borderWidth={4}
              />
              <ProjectCardTrigger
                name={item.name}
                desc={item.desc}
                image={item.image}
                techStack={item.techStack}
                index={index}
              />
            </DialogTrigger>
            <DialogContent className="px-0">
              <DialogHeader className="-mt-6">
                <ProjectCardDialogHeader
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                />
              </DialogHeader>
              <div className="px-6">
                <h3 className="mb-2 font-medium text-muted-foreground">
                  TECH STACK
                </h3>
                <TechStackGrid techStack={item.techStack} />
              </div>
              <DialogFooter className="px-6">
                <ProjectCardDialogFooter
                  github={item.github}
                  live={item.live}
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </PageWrapper>
  )
}
