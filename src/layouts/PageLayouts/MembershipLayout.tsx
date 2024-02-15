// Librarys
import dynamic from 'next/dynamic'

// Components
import BoxContainer from '@containers/BoxContainer'
import BrandMyOppo from '@assets/icons/brand-my-oppo'
import DownloadMembershipPDF from '@modules/Membership/components/DownloadMembershipPDF'
import MembershipDescription from '@modules/Membership/components/MembershipDescription'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function MembershipLayout() {
  return (
    <BoxContainer className="membership">
      <BoxTitle
        icon={<BrandMyOppo size="md" />}
        value="Afiliación Omnilife"
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
    </BoxContainer>
  )
}
