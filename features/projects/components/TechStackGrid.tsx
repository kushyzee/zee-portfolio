import { Badge } from "@/components/ui/badge"

export default function TechStackGrid({ techStack }: { techStack: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-primary">
      {techStack.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>
  )
}
