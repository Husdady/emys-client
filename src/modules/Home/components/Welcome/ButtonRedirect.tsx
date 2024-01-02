// Components
import Button from '@components/Button'
import CircleArrowDown from '@assets/icons/circle-arrow-down'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Utils
import classnames from '@utils/classnames'
import scrollToWelcome from './utils/scrollToWelcome'
import scrollToLatestProducts from './utils/scrollToLatestProducts'

export default function ButtonRedirectToProducts() {
  const { ref, animationClassName } = useAnimationInView('animate__fadeInUp')

  return (
    <div
      ref={ref}
      className={classnames([
        animationClassName,
        'btn-redirect-container flex justify-center -mt-[7rem] mb-[4rem]'
      ])}
    >
      <Button
        title=""
        titlePopup="Navegar a la sección de 'Últimos productos agregados'"
        className="btn-redirect bg-transparent !p-0 animate-circle-arrow-bottom text-main-500 hover:text-rose-500 !w-[initial] dark:text-rose-300 dark:hover:text-rose-500"
        onClick={
          window.scrollY > (window.innerWidth <= 640 ? 550 : 450)
            ? scrollToWelcome
            : scrollToLatestProducts
        }
        icon={
          <CircleArrowDown
            size="bigger"
            className={classnames([
              'stroke-[4]',
              window.scrollY > (window.innerWidth <= 640 ? 550 : 450) ? '-rotate-[-180deg]' : null
            ])}
          />
        }
      />
    </div>
  )
}
