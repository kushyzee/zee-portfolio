import { Poppins, Noto_Sans } from "next/font/google"

import "./globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import NavMenu from "@/features/navigation/components/NavMenu"
import { Metadata } from "next"
import { DarkModeToggle } from "@/components/DarkModeToggle"

config.autoAddCss = false

const notoSans = Noto_Sans({ variable: "--font-noto" })

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Arinze's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased", poppins.className, notoSans.variable)}
    >
      <body className="relative min-h-svh px-5 pb-32 lg:px-10 lg:pb-8">
        <ThemeProvider>
          <div className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto flex w-full max-w-2xl justify-end pt-5 pr-5 lg:max-w-[1400px] lg:pt-10 lg:pr-10">
            <DarkModeToggle />
          </div>
          <NavMenu />
          <main className="mx-auto h-full max-w-2xl lg:max-w-[1200]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
