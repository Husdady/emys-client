// Librarys
import dynamic from 'next/dynamic'

// Components
import SellerItem from './Item'
import SellerPhoto from './SellerPhoto'
import SellerNameAndEmail from './SellerNameAndEmail'
import SellerStatusPlaceholder from './Status/Placeholder'
import ContactSellerPlaceholder from './ContactSeller/Placeholder'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Dynamic Components
const SocialNetworks = dynamic(() => import('./SocialNetworks'))

const SellerStatus = dynamic(() => import('./Status'), {
  loading: () => <SellerStatusPlaceholder />
})

const ContactSeller = dynamic(() => import('./ContactSeller'), {
  loading: () => <ContactSellerPlaceholder />
})

export default function Seller({
  dni,
  ruc,
  photo,
  email,
  phone,
  status,
  fullname,
  country,
  region,
  province,
  district,
  socialNetworks
}: Seller) {
  return (
    <article className="seller animate__animated animate__fadeIn animate__slow bg-white shadow-2xl border-[3px] border-gray-300 rounded-2xl pt-4 pb-[0.95rem] px-2.5 sm:px-3.5 dark:shadow-none dark:bg-dark-800 dark:border-gray-500/90 flex flex-col text-[0.92rem] shadow-blue-200 h-full">
      <div className="flex gap-x-3.5 mb-3 px-4 seller-header">
        <SellerPhoto photo={photo} />

        <div className="seller-header-content flex flex-col gap-y-3 justify-center pb-3 pt-2 truncate">
          <SellerNameAndEmail email={email} fullname={fullname} />
          <SocialNetworks sellerFullname={fullname} socialNetworks={socialNetworks} />
          <SellerStatus status={status} />
        </div>
      </div>

      <div className="inner-wrapper mb-3 flex flex-col leading-3 gap-y-1.5 w-full rounded-lg text-center">
        <SellerItem field="RUC" value={ruc} />
        <SellerItem field="DNI" value={dni} />
        <SellerItem field="País" value={country?.country} />
        <SellerItem field="Región" value={region?.region} />
        <SellerItem field="Provincia" value={province?.province} />
        <SellerItem field="Distrito" value={district?.district} />
        <SellerItem field="Número Telefónico" value={phone} />
      </div>

      <ContactSeller phone={phone} status={status} fullname={fullname} />
    </article>
  )
}
