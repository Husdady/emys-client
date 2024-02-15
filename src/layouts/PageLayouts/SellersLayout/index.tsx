// Components
import ReloadSellers from '@modules/Sellers/components/ReloadSellers'
import SellersPagination from '@modules/Sellers/components/SellersPagination'

export default function SellersLayout() {
  return (
    <section className="sellers mt-2 pb-6">
      <div className="my-3 sm:mt-0 sm:mb-[2rem] flex items-center justify-end max-w-[1150px] mx-4 sm:mx-[2rem] xl:mx-auto">
        <ReloadSellers />
      </div>

      <SellersPagination />
    </section>
  )
}
