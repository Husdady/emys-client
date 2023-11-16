// Constants
const DARK_CLASSNAME = 'dark:bg-main-400'
const LIGHT_CLASSNAME = 'bg-main-700 text-white'

export const SubmitButtonProps = Object.freeze({
  TYPE: 'submit',
  CLASSNAME: `submit-button w-full rounded-3xl text-uppercase ${LIGHT_CLASSNAME} ${DARK_CLASSNAME}`,
  CUSTOM_TITLE: {
    className: '!font-lexend md:text-[0.92rem] text-inherit hover:underline'
  }
})
