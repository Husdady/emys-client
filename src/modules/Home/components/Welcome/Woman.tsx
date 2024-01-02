// Librarys
import Image from 'next/image'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Utils
import classnames from '@utils/classnames'

// Images
import woman from '@assets/images/woman.webp'

export default function Woman() {
  const { ref, animationClassName } = useAnimationInView('animate__fadeInUp')

  return (
    <div ref={ref}>
      <Image
        priority
        alt="woman"
        width={330}
        height={250}
        src={woman.src}
        className={classnames([
          animationClassName,
          'welcome-image relative left-[6%] xl:left-[3%] min-w-[330px] min-h-[250px]'
        ])}
      />
    </div>
  )
}
