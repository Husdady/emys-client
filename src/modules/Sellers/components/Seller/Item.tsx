interface SellerItemProps {
  field: string
  value?: string | number | null
}

export default function SellerItem({ field, value }: SellerItemProps) {
  return (
    <span className="seller-item-data py-3 md:py-2.5 text-gray-500 dark:text-gray-300 font-poppins flex items-center justify-between px-2.5 md:px-2 bg-gray-100 rounded-md dark:bg-gray-600 leading-snug break-word">
      <span className="text-left">{field}: </span>
      <span className="font-semibold text-black dark:font-normal dark:text-white">
        {value ?? '-'}
      </span>
    </span>
  )
}
