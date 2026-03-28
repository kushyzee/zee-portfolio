/* eslint-disable react/no-children-prop */

"use client"

import z from "zod"
import { useForm, useStore } from "@tanstack/react-form"
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import CustomButton from "@/components/CustomButton"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { Textarea } from "@/components/ui/textarea"
import { contactFormAction } from "../action"
import { useRouter } from "next/navigation"

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { error: "Name is required" }),
  email: z.email({ error: "Please enter a valid email address" }),
  message: z.string().trim().min(1, { error: "message is required" }),
})

interface FieldObj {
  name: "name" | "email" | "message"
  type: string
  placeholder: string
}

type FormFields = FieldObj[]

const formFields: FormFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Your Name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your Email",
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Your Message",
  },
]

export default function ContactForm() {
  const router = useRouter()

  const form = useForm({
    validators: {
      onChange: contactFormSchema,
    },
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      const data = {
        ...value,
        access_key: "97374601-3fc2-44dd-a9b2-5be3ace960e6",
      }

      const result = await contactFormAction(data)
      if (result?.success) {
        router.push("/")
      } else {
        alert(result.error || "Failed to submit form")
      }
    },
  })

  const isSubmitting = useStore(form.store, (s) => s.isSubmitting)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="space-y-8"
    >
      {formFields.map((formField) => (
        <form.Field
          key={formField.name}
          name={formField.name}
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid

            return (
              <Field data-invalid={isInvalid}>
                <FieldContent>
                  <FieldLabel htmlFor={field.name} className="sr-only">
                    {field.name}
                  </FieldLabel>
                  {formField.type === "textarea" ? (
                    <Textarea
                      className="min-h-40 rounded-4xl placeholder:text-gray-800 dark:placeholder:text-gray-300"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={() => {
                        field.handleBlur()
                      }}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder={formField.placeholder}
                    ></Textarea>
                  ) : (
                    <Input
                      className="placeholder:text-gray-800 dark:placeholder:text-gray-300"
                      id={field.name}
                      name={field.name}
                      type={formField.type}
                      value={field.state.value}
                      onBlur={() => {
                        field.handleBlur()
                      }}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder={formField.placeholder}
                    />
                  )}
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </FieldContent>
              </Field>
            )
          }}
        />
      ))}
      <div>
        <CustomButton
          icon={faPaperPlane}
          text={isSubmitting ? "SUBMITTING..." : "SEND MESSAGE"}
          type="submit"
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  )
}
