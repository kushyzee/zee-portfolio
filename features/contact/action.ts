"use server"

import "server-only"
import { redirect } from "next/navigation"

interface Data {
  access_key: string
  name: string
  email: string
  message: string
}

export const contactFormAction = async (formData: Data) => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData, null, 2),
    })

    const data = await response.json()

    if (data.success) {
      redirect("/")
    }

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
