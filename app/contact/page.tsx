import PageWrapper from "@/components/PageWrapper"
import ContactForm from "@/features/contact/components/ContactForm"
import SocialMediaGroup from "@/features/contact/components/SocialMediaGroup"
import {
  faEnvelopeOpen,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contactDetails = [
  {
    label: "SEND MAIL",
    link: "mailto:arinzeogbuniba@gmail.com",
    text: "arinzeogbuniba@gmail.com",
    icon: faEnvelopeOpen,
  },
  {
    label: "CALL ME",
    link: "tel:+2348147579531",
    text: "+2348147579531",
    icon: faPhoneSquare,
  },
]

export default function Page() {
  return (
    <PageWrapper title="GET IN" highlight="TOUCH">
      <div className="gap-20 lg:grid lg:grid-cols-2">
        <div>
          <p className="text-muted-foreground">
            Have a project in mind or want to chat? Send me a message and I will
            get back to you.
          </p>
          <div className="mt-6 space-y-5">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  className="text-primary"
                  widthAuto
                />
                <div>
                  <p>{item.label}</p>
                  <a
                    href={item.link}
                    className="text-primary transition-colors duration-200 ease-linear hover:text-primary/80 hover:underline"
                  >
                    {item.text}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <SocialMediaGroup />
        </div>

        <div className="mt-8 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  )
}
