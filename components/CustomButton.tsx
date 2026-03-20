import { Button } from "./ui/button"

interface CustomButtonProps {
  text: string
  children: React.ReactNode
}

export default function CustomButton({ text, children }: CustomButtonProps) {
  return (
    <Button
      variant="outline"
      size="lg"
      className="mt-2 rounded-full pr-0 transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground"
    >
      {text}
      <div className="inline-flex h-full w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {children}
      </div>
    </Button>
  )
}
