// Librarys
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Components
import Phone from '@assets/icons/phone'
import ContactSellerPlaceholder from './ContactSeller/Placeholder'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Dynamic Components
const ContactSeller = dynamic(() => import('./ContactSeller'), {
  loading: () => <ContactSellerPlaceholder />
})

export default function Seller({
  dni,
  ruc,
  email,
  phone,
  status,
  fullname,
  country,
  region,
  province,
  district
}: Seller) {
  return (
    <article
      tabIndex={0}
      title={`Contactar a ${fullname}`}
      className="animate__animated animate__fadeIn animate__slow bg-white shadow-2xl border-[3px] border-gray-300 rounded-2xl pt-4 pb-[0.95rem] px-2.5 sm:px-3.5 dark:shadow-none dark:bg-dark-800 dark:border-gray-500/90 flex flex-col text-[0.92rem] min-w-[350px] max-w-[350px] shadow-blue-200 h-full"
    >
      <div className="flex gap-x-3.5 mb-5 px-4">
        <div className="min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-full border-[3px] border-gray-200 overflow-hidden shadow-lg dark:border-gray-500">
          <Image
            width={100}
            height={100}
            alt="seller-photo"
            className="object-cover min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px]"
            src="https://boo-prod.b-cdn.net/Wns3xFYDebZ8FiVtaIiRN6Orw7M2/170363835758919615d8db742b46e600d3286c3ff430d.jpg"
          />
        </div>

        <div className="flex flex-col gap-y-3 justify-center pb-3 pt-2 truncate">
          <div className="flex flex-col gap-y-[0.12rem] leading-[18px] truncate">
            <h4 className="seller-fullname font-poppins dark:text-white font-semibold text-[1rem] dark:!font-normal truncate">
              {fullname}
            </h4>

            <span className="seller-email text-gray-400 font-poppins leading-tight dark:text-gray-200 truncate block">
              {email}
            </span>
          </div>

          <span className="available-seller font-semibold text-sky-500 bg-sky-100 rounded-full px-2 py-[0.2rem] dark:bg-sky-500 dark:text-white text-center flex items-center justify-center dark:font-normal font-lexend">
            Disponible
          </span>
        </div>
      </div>

      <div className="mb-3 flex flex-col leading-3 gap-y-1.5 w-full rounded-lg text-center">
        <span className="py-2.5 seller-ruc text-gray-500 dark:text-gray-300 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          RUC:{' '}
          <span className="font-semibold text-black dark:font-normal dark:text-white">{ruc}</span>
        </span>

        <span className="py-2.5 seller-dni text-gray-500 dark:text-gray-300 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          DNI:{' '}
          <span className="font-semibold text-black dark:font-normal dark:text-white">{dni}</span>
        </span>

        <span className="py-2.5 seller-dni text-gray-500 dark:text-gray-300 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          País:{' '}
          <span className="font-semibold text-black dark:font-normal dark:text-white">
            {country?.country ?? '-'}
          </span>
        </span>

        <span className="py-2.5 seller-dni text-gray-500 dark:text-gray-300 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          Región:{' '}
          <span className="font-semibold text-black dark:font-normal dark:text-white">
            {region?.region ?? '-'}
          </span>
        </span>

        <span className="py-2.5 seller-dni text-gray-500 dark:text-gray-300 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          Provincia:{' '}
          <span className="font-semibold text-black dark:font-normal dark:text-white">
            {province?.province ?? '-'}
          </span>
        </span>

        <span className="py-2.5 seller-dni text-gray-500 dark:text-gray-300 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          Distrito:{' '}
          <span className="font-semibold text-black dark:font-normal dark:text-white">
            {district?.district ?? '-'}
          </span>
        </span>

        <div className="py-2.5 flex items-center gap-x-1 font-poppins flex justify-between px-2 bg-gray-100 rounded-md dark:bg-gray-600">
          <span className="text-gray-500 dark:text-gray-300">Número Telefónico:</span>
          <span className="seller-phone font-semibold text-black dark:font-normal dark:text-white">
            {phone}
          </span>
        </div>
      </div>

      <ContactSeller phone={phone} status={status} fullname={fullname} />
    </article>
  )
}
