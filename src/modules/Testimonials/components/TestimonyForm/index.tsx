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

// Constants
import { TESTIMONY_FORM_ID } from './constants'

// Lazy Components
const TextArea = lazy(() => import('@components/TextArea'))
const InputText = lazy(() => import('@components/InputText'))
const UploadPhoto = lazy(() => import('@components/Upload'))
const Regions = lazy(() => import('@modules/Ubigeo/components/Regions'))
const Countries = lazy(() => import('@modules/Ubigeo/components/Countries'))
const Districts = lazy(() => import('@modules/Ubigeo/components/Districts'))
const Provinces = lazy(() => import('@modules/Ubigeo/components/Provinces'))

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
          error={getFormError('author', errors)}
          hasError={isString(errors.author?.message)}
          autoFocus={isString(errors.author?.message)}
        />
      </Fallback>

      <section className="inner-wrapper flex align-center gap-3">
        <Fallback classLabel="w-40">
          <Countries
            onChange={handleChangeCountryId}
            selectedValue={watch('countryId') ?? ''}
            error={getFormError('countryId', errors)}
            textLabel="País del autor (opcional)"
          />
        </Fallback>

        <Fallback classLabel="w-36">
          <Regions
            onChange={handleChangeRegionId}
            countryId={watch('countryId') ?? ''}
            selectedValue={watch('regionId') ?? ''}
            error={getFormError('regionId', errors)}
            textLabel="Región del autor (opcional)"
          />
        </Fallback>
      </section>

      <section className="inner-wrapper flex align-center gap-3">
        <Fallback classLabel="w-36">
          <Provinces
            onChange={change('provinceId')}
            regionId={watch('regionId') ?? ''}
            countryId={watch('countryId') ?? ''}
            selectedValue={watch('provinceId') ?? ''}
            error={getFormError('provinceId', errors)}
            textLabel="Provincia del autor (opcional)"
          />
        </Fallback>

        <Fallback classLabel="w-36">
          <Districts
            onChange={change('districtId')}
            provinceId={watch('provinceId') ?? ''}
            selectedValue={watch('districtId') ?? ''}
            error={getFormError('districtId', errors)}
            textLabel="Distrito del autor (opcional)"
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
