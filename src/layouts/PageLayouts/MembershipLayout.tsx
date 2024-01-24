// Librarys
import dynamic from 'next/dynamic'

// Components
import Users from '@assets/icons/users'
import DownloadMembershipPDF from '@modules/Membership/components/DownloadMembershipPDF'
import MembershipDescription from '@modules/Membership/components/MembershipDescription'

// Dynamic Components
const BoxWrapper = dynamic(() => import('@components/Wrapper'))
const BoxTitle = dynamic(() => import('@components/WrapTitle'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function MembershipLayout() {
  return (
    <section className="membership flex flex-col gap-y-3 mb-4 sm:mb-[3rem] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] 2xl:max-w-[1200px] px-2 sm:px-[2rem] md:[3rem] lg:px-0 mx-auto">
      <BoxTitle
        icon={<Users size="md" />}
        value="Programa de Afiliados"
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
