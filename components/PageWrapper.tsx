interface PageWrapperProps {
  title: string
  highlight: string
  children: React.ReactNode
}

export default function PageWrapper({
  title,
  highlight,
  children,
}: PageWrapperProps) {
  return (
    <main className="min-h-svh pt-20">
      <h1 className="mb-14 text-3xl font-extrabold">
        {title} <span className="text-primary">{highlight}</span>
      </h1>
      {children}
    </main>
  )
}
