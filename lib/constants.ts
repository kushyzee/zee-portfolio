import { z } from "zod"
import nextJs from "@/assets/images/icon-nextjs.svg"
import react from "@/assets/images/icon-react.svg"
import typescript from "@/assets/images/icon-typescript.svg"
import javascript from "@/assets/images/icon-javascript.svg"
import tailwind from "@/assets/images/icon-tailwindcss.svg"
import css from "@/assets/images/icon-css.svg"
import git from "@/assets/images/icon-git.svg"
import quantum from "@/assets/images/quantumsshop.jpeg"
import aquatrack from "@/assets/images/aquatrack.jpeg"
import recipeHaven from "@/assets/images/recipe-haven.jpeg"
import starsBrand from "@/assets/images/the-stars-brand.jpeg"
import invoiceApp from "@/assets/images/invoice_app.jpeg"
import heavenlyDelights from "@/assets/images/heavenly-delights.png"
import {
  faHome,
  faBriefcase,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

export const menu = [
  {
    name: "HOME",
    link: "/",
    icon: faHome,
  },
  {
    name: "PROJECTS",
    link: "/projects",
    icon: faBriefcase,
  },
  {
    name: "ABOUT",
    link: "/about",
    icon: faUser,
  },
  {
    name: "CONTACT",
    link: "/contact",
    icon: faEnvelope,
  },
]

export const projects = [
  {
    name: "AquaTrack",
    desc: "A fish farm management system that digitizes daily operations, replacing manual record-keeping with a structured, data-driven interface for tracking stock, feed usage, and farm performance.",
    image: aquatrack,
    live: "https://aquatrack-dusky.vercel.app/",
    github: "https://github.com/kushyzee/aquatrack",
    techStack: ["Next.js", "Supabase", "PostgreSQL", "TailwindCSS"],
  },
  {
    name: "Quantum's Shop",
    desc: "A high-performance landing page for a digital asset and gaming business, designed to replace manual WhatsApp interactions with a clean, conversion-focused storefront.",
    image: quantum,
    live: "https://quantumsshop.com.ng/",
    github: "https://github.com/kushyzee/quantums-shop",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "Recipe Haven",
    desc: "A modern recipe browsing app with filtering, search, and authentication, focused on delivering a smooth and responsive user experience.",
    image: recipeHaven,
    live: "https://recipe-haven-cyan.vercel.app/",
    github: "https://github.com/kushyzee/recipe-haven",
    techStack: ["React", "Supabase", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "The Stars Brand",
    desc: "A fashion and tailoring website built to showcase custom designs and handcrafted pieces through a clean, visually engaging interface.",
    image: starsBrand,
    live: "https://the-stars-brand.vercel.app/",
    github: "https://github.com/kushyzee/the-stars-brand",
    techStack: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "Invoice App",
    desc: "A full-featured invoice management app for creating, tracking, and managing invoices through a draft to paid workflow, with persistent storage, status filtering, and a clean light/dark interface.",
    image: invoiceApp,
    live: "https://invoiceapp-rosy-eta.vercel.app/",
    github: "https://github.com/kushyzee/invoice-app",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
  },
  {
    name: "Heavenly Delights",
    desc: "A website for a local bakery using Supabase and paystack payment gateway.",
    image: heavenlyDelights,
    live: "https://heavenly-delights.vercel.app",
    github: "https://github.com/kushyzee/heavenly-shop",
    techStack: ["React", "Supabase", "TailwindCSS"],
  },
]

export const techStack = [
  {
    name: "NextJS",
    logo: nextJs,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "TypeScript",
    logo: typescript,
  },
  {
    name: "JavaScript",
    logo: javascript,
  },
  {
    name: "Tailwind",
    logo: tailwind,
  },
  {
    name: "CSS",
    logo: css,
  },
  {
    name: "Git",
    logo: git,
  },
]

// export const socialMedia = [
//   {
//     name: "WhatsApp",
//     logo: "/images/icon-whatsapp.svg",
//     link: "https://dm.wa.link/ynh71u",
//   },
//   {
//     name: "Twitter",
//     logo: "/images/icon-twitter.svg",
//     link: "https://x.com/zeetech_dev",
//   },
//   {
//     name: "LinkedIn",
//     logo: "/images/icon-linkedin.svg",
//     link: "https://linkedin.com/in/arinze-ogbuniba-5b89a1b5",
//   },
// ]

export const inputFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Your Email",
  },
  {
    label: "Message",
    type: "textarea",
    placeholder: "Your Message",
  },
]

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .min(12, { message: "Message must be at least 12 characters" }),
})
