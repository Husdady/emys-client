// Librarys
import dynamic from 'next/dynamic'

// Components
import BrandMyOppo from '@components/Icons/BrandMyOppo'
import DownloadMembershipPDF from './DownloadMembershipPDF'
import MembershipDescription from './Description'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function AffiliateProgram() {
  return (
    <section className="affiliate-program flex flex-col gap-y-3">
      <BoxTitle
        value="Afiliación Omnilife"
        icon={<BrandMyOppo size="md" className="stroke-3" />}
        popupTitle="En esta sección podrás descargar el PDF sobre el Programa de Afiliados de Omnilife"
      />

      <BoxWrapper className="!p-0">
        <Aside
          className="p-6 sm:py-8 sm:px-6"
          title="Acerca del Programa de Afiliados de Omnilife"
          description={<MembershipDescription />}
        >
          <DownloadMembershipPDF />
        </Aside>
      </BoxWrapper>
    </section>
  )
}
