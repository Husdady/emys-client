// Interfaces
import { MainTitleProps } from './interfaces'

export default function MainTitle({ title }: MainTitleProps) {
  return (
    <div className="main-title-container px-6 max-w-[1100px] mx-auto text-center flex justify-center">
      <h5 className="main-title text-4xl font-lexend break-word text-black font-semibold">
        {title}
      </h5>
    </div>
  )
}
