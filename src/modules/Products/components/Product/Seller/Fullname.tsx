// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

export default function SellerFullname({ fullname }: Partial<Pick<Seller, 'fullname'>> = {}) {
  return (
    <div className="seller-fullname leading-tight" title={fullname}>
      <span className="font-semibold dark:text-gray-300">Vendido por:</span>
      <h6 className="font-poppins dark:text-gray-300 leading-4 break-word">{fullname ?? 'Vendedor anónimo'}</h6>
    </div>
  )
}
