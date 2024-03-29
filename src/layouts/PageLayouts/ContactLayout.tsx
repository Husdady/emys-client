// Librarys
import dynamic from 'next/dynamic'

// Components
import BoxContainer from '@containers/BoxContainer'
import HeadPhones from '@components/Icons/HeadPhones'
import ContactForm from '@modules/Contact/components/ContactForm'
import BackToHome from '@components/BackButton/components/BackToHome'

// Constants
import { APP_NAME } from '@config/envs'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function ContactLayout() {
  return (
    <BoxContainer className="contact">
      <BackToHome />

      <BoxTitle
        value="Envíanos un mensaje"
        icon={<HeadPhones size="md" />}
        popupTitle="Contáctanos aquí para cualquier pregunta o comentario; te responderemos pronto"
      />

      <BoxWrapper className="!p-0">
        <Aside
          className="p-6 sm:py-8 sm:px-6"
          title="Contáctanos para resolver tus dudas"
          description={`Al completar este formulario y enviar tu mensaje, recibiremos tus preguntas o comentarios. Esta acción nos permitirá abordar todas tus inquietudes relacionadas con ${APP_NAME}. Agradecemos tu colaboración.`}
        >
          <ContactForm
            innerClassName="!mb-7"
            className="!shadow-none !border-none !p-0 !max-w-[initial]"
            isShowingMessage={false}
          />
        </Aside>
      </BoxWrapper>
    </BoxContainer>
  )
}
