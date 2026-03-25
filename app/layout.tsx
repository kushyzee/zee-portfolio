import { Poppins, Noto_Sans } from "next/font/google"

import "./globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import NavMenu from "@/features/navigation/components/NavMenu"
import { Metadata } from "next"

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
      className={cn("antialiased", poppins.className, notoSans.variable)}
    >
      <body className="relative p-5 pb-32">
        <ThemeProvider>
          <NavMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
