// Components
import ContactForm from '@modules/Contact/components/ContactForm'

export default function Contact() {
  return (
    <section className="home-contact max-w-[450px] mx-auto py-[3rem] sm:py-[4rem] px-3">
      <h5 className="main-title text-[2rem] font-lexend mb-5 text-main-700 dark:text-rose-200 text-center leading-8 mx-4">Envíanos un mensaje</h5>
      <ContactForm />
    </section>
  )
}
