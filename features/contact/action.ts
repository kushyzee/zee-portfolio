interface Data {
  access_key: string
  name: string
  email: string
  message: string
}

export const contactFormAction = async (formData: Data) => {
  console.log(formData)
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
      return { success: true }
    }

    return { success: false, error: data.message || "Submission failed" }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, error: "An error occurred" }
  }
}
