// Librarys
import dynamic from 'next/dynamic'

// Components
import Description from './Description'
import LinkSection from './LinkSection'
import UserCircleSolid from '@components/Icons/UserCircleSolid'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function AffiliateAsCustomer() {
  return (
    <section className="affiliate-as-customer flex flex-col gap-y-3">
      <BoxTitle
        icon={<UserCircleSolid size="md" />}
        value="Afiliarme como Cliente Admirable"
        popupTitle="En esta sección podrás afiliarte como Cliente Admirable"
      />

      <BoxWrapper className="!p-0">
        <Aside
          description={<Description />}
          className="p-6 sm:py-8 sm:px-6"
          title="¿Qué es un Cliente Admirable?"
        >
          <LinkSection />
        </Aside>
      </BoxWrapper>
    </section>
  )
}
