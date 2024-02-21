// Librarys
import dynamic from 'next/dynamic'

// Components
import Description from './Description'
import LinkSection from './LinkSection'
import UserTie from '@assets/icons/user-tie'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function AffiliateAsEntrepeuner() {
  return (
    <section className="affiliate-as-entrepeuner flex flex-col gap-y-3">
      <BoxTitle
        icon={<UserTie size="md" />}
        value="Afiliarme como Empresario Omnilife"
        popupTitle="En esta sección podrás afiliarte como Empresario Omnilife"
      />

      <BoxWrapper className="!p-0">
        <Aside
          className="p-6 sm:py-8 sm:px-6"
          title="¿Qué es un Empresario Omnilife?"
          description={<Description />}
        >
          <LinkSection />
        </Aside>
      </BoxWrapper>
    </section>
  )
}
