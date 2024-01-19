// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

export default function SellerNameAndEmail({
  email,
  fullname
}: Pick<Seller, 'email' | 'fullname'>) {
  return (
    <div className="flex flex-col gap-y-[0.12rem] leading-[18px] truncate">
      <h4 className="seller-fullname font-poppins dark:text-white font-semibold text-[1rem] dark:!font-normal truncate">
        {fullname}
      </h4>

      <span className="seller-email text-gray-400 font-poppins leading-tight dark:text-gray-200 truncate block">
        {email}
      </span>
    </div>
  )
}
