// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

export default function SellerFullname({ fullname }: Partial<Pick<Seller, 'fullname'>> = {}) {
  return (
    <div className="seller-fullname leading-tight truncate" title={fullname}>
      <span className="font-semibold dark:text-gray-300">Vendido por:</span>
      <h6 className="font-poppins truncate dark:text-gray-300">{fullname ?? 'Vendedor anónimo'}</h6>
    </div>
  )
}
