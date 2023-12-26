// Librarys
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Components
import SeeAllProducts from './SeeAllProducts'

// Images
import woman from '@assets/images/woman.webp'

// Dynamic Components
const Title = dynamic(() => import('./Title'))
const Message = dynamic(() => import('./Message'))
const WelcomeTopWave = dynamic(() => import('./waves/welcome-top-wave'))
const WelcomeBottomWave = dynamic(() => import('./waves/welcome-bottom-wave'))

export default function Welcome() {
  return (
    <>
      <section className="welcome relative overflow-hidden min-h-[300px] bg-pink-200">
        <div className="main-wrapper-welcome max-w-[1300px] mx-auto px-[3rem] overflow-hidden relative z-[9999]">
          <div className="main-inner-welcome flex items-center mt-[7.75rem] justify-around xl:justify-between max-w-[1000px] mx-auto">
            <div className="welcome-content max-w-[500px] mb-[3rem]">
              <Title />
              <Message />
              <SeeAllProducts />
            </div>

            <Image
              priority
              alt="woman"
              width={330}
              height={250}
              src={woman.src}
              className="welcome-image relative left-[6%] xl:left-[3%] min-w-[330px] min-h-[250px]"
            />
          </div>
        </div>

        <WelcomeTopWave />
      </section>

      <WelcomeBottomWave />
    </>
  )
}
