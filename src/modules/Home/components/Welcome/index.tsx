// Librarys
import dynamic from 'next/dynamic'

// Components
import SeeAllProducts from './SeeAllProducts'

// Constants
import { WELCOME_ID } from './constants'

// Dynamic Components
const Title = dynamic(() => import('./Title'))
const Woman = dynamic(() => import('./Woman'))
const Message = dynamic(() => import('./Message'))
const WelcomeTopWave = dynamic(() => import('./waves/welcome-top-wave'))
const WelcomeBottomWave = dynamic(() => import('./waves/welcome-bottom-wave'))
const ButtonRedirect = dynamic(() => import('./ButtonRedirect'))

export default function Welcome() {
  return (
    <>
      <section
        id={WELCOME_ID}
        className="welcome relative overflow-hidden min-h-[300px] bg-pink-200"
      >
        <div className="main-wrapper-welcome max-w-[1300px] mx-auto px-[3rem] overflow-hidden relative z-[9999]">
          <div className="main-inner-welcome transition-ease-out flex items-center mt-[8.5rem] justify-around xl:justify-between max-w-[1000px] mx-auto">
            <div className="welcome-content max-w-[500px] mb-[3rem]">
              <Title />
              <Message />
              <SeeAllProducts />
            </div>

            <Woman />
          </div>
        </div>

        <WelcomeTopWave />
      </section>

      <WelcomeBottomWave />
      <ButtonRedirect />
    </>
  )
}
