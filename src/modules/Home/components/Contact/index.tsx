// Components
import ContactForm from '@modules/Contact/components/ContactForm'

export default function Contact() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-500 bg-gray-100/60 dark:bg-gray-700">
      <section className="home-contact pt-[3rem] pb-[2.5rem] sm:pt-[4rem] sm:pb-[3.5rem] px-3">
        <h5 className="main-title text-[2rem] font-lexend mb-5 text-main-700 dark:text-rose-200 text-center leading-8 mx-4">
          Contáctanos
        </h5>

        <p className="mb-[2.15rem] mx-auto text-center font-poppins max-w-[550px] font-semibold text-gray-600 dark:text-gray-300">
          ¡Hola! Agradecemos tu interés en ponerte en contacto con nosotros. Para garantizar una
          respuesta precisa y oportuna, te animamos a ser lo más descriptivo posible en tu mensaje.
          Cuéntanos con detalle tu consulta o comentario para que podamos ayudarte de la mejor
          manera.
        </p>

        <ContactForm />
      </section>
    </div>
  )
}
