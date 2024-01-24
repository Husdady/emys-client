/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@components/Fallback'
import UploadFallback from '@components/Upload/Fallback'

// Hooks
import useTestimonyForm from './useTestimonyForm'

// Interfaces
import { TestimonyFormProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'
import getFormError from '@utils/getFormError'

// Styles
import './styles.scss'

// Lazy Components
const TextArea = lazy(() => import('@components/TextArea'))
const InputText = lazy(() => import('@components/InputText'))
const UploadPhoto = lazy(() => import('@components/Upload'))
const Regions = lazy(() => import('@modules/Ubigeo/components/Regions'))
const Countries = lazy(() => import('@modules/Ubigeo/components/Countries'))
const Districts = lazy(() => import('@modules/Ubigeo/components/Districts'))
const Provinces = lazy(() => import('@modules/Ubigeo/components/Provinces'))

export const TESTIMONY_FORM_ID = 'testimony-form-79530uob'

export default function TestimonyForm(props: TestimonyFormProps) {
  const {
    watch,
    errors,
    submit,
    change,
    register,
    handleSubmit,
    onChangeAuthorPhoto,
    onRemoveAuthorPhoto,
    handleChangeRegionId,
    handleChangeCountryId
  } = useTestimonyForm(props)

  return (
    <form
      id={TESTIMONY_FORM_ID}
      className="testimony-form flex flex-col gap-y-3 pt-3"
      onSubmit={handleSubmit(submit)}
    >
      <Suspense fallback={<UploadFallback />}>
        <UploadPhoto
          photo={watch('previewAuthorPhoto')}
          titlePopup="Foto de perfil del autor"
          onChange={onChangeAuthorPhoto}
          onRemove={onRemoveAuthorPhoto}
        />
      </Suspense>

      <Fallback classLabel="w-28">
        <InputText
          textLabel="Nombre del autor"
          customInput={register('author')}
          placeholder="Ejemplo: Enrique Mena"
          hasError={isString(errors.author?.message)}
          error={getFormError('author', errors)}
        />
      </Fallback>

      <section className="inner-wrapper flex align-center gap-3">
        <Fallback classLabel="w-40">
          <Countries
            textLabel="País del autor"
            onChange={handleChangeCountryId}
            selectedValue={watch('countryId') ?? ''}
            error={getFormError('countryId', errors)}
          />
        </Fallback>

        <Fallback classLabel="w-36">
          <Regions
            textLabel="Región del autor"
            onChange={handleChangeRegionId}
            countryId={watch('countryId') ?? ''}
            selectedValue={watch('regionId') ?? ''}
            error={getFormError('regionId', errors)}
          />
        </Fallback>
      </section>

      <section className="inner-wrapper flex align-center gap-3">
        <Fallback classLabel="w-36">
          <Provinces
            onChange={change('provinceId')}
            textLabel="Provincia del autor"
            regionId={watch('regionId') ?? ''}
            selectedValue={watch('provinceId') ?? ''}
            error={getFormError('provinceId', errors)}
          />
        </Fallback>

        <Fallback classLabel="w-36">
          <Districts
            textLabel="Distrito del autor"
            onChange={change('districtId')}
            provinceId={watch('provinceId') ?? ''}
            selectedValue={watch('districtId') ?? ''}
            error={getFormError('districtId', errors)}
          />
        </Fallback>
      </section>

      <Fallback classLabel="w-28" classComp="!h-60">
        <TextArea
          textLabel="Testimonio del autor"
          className="h-[350px] sm:h-[250px]"
          placeholder="Ingresa el testimonio del autor"
          customTextArea={register('testimony')}
          hasError={isString(errors.testimony?.message)}
          error={getFormError('testimony', errors)}
        />
      </Fallback>
    </form>
  )
}
