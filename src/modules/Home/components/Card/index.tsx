// Librarys
import Image from 'next/image'

// Components
import Button from '@components/Button'

// Hooks
import useAnimationInView from '@hooks/useAnimationInView'

// Types
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

// Interfaces
import { HomeCardProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function HomeCard({
  title,
  onClick,
  className,
  description,
  imageProps = {},
  animationUtilityClassName,
  buttonTitle = 'Saber más',
  animationClassName = 'animate__fadeIn'
}: HomeCardProps) {
  const data = useAnimationInView(animationClassName, animationUtilityClassName)

  return (
    <article
      ref={data.ref}
      className={classnames([
        className,
        data.animationClassName,
        'home-card flex w-[360px] h-[220px] rounded-sm shadow-xl'
      ])}
    >
      <div className="card-information w-[64%] flex flex-col gap-y-2 justify-between pt-4 pb-5 px-5 overflow-hidden">
        <h5 className="title text-[1.15rem] mb-0 text-white font-lexend leading-[1.2]">{title}</h5>

        <span className="description font-semibold leading-snug">{description}</span>

        <Button
          onClick={onClick}
          title={buttonTitle}
          className="btn-know-more w-[80%] mt-2 !py-2 flex items-center rounded-full hover:!text-white text-[0.8rem] font-semibold"
        />
      </div>

      <Image
        {...imageProps}
        alt={imageProps.alt as string}
        src={imageProps.src as string | StaticImport}
        className="w-[36.1%] h-full object-cover"
        priority
      />
    </article>
  )
}
