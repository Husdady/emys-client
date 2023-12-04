/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Fallback from '@components/Fallback'
import DeviceFloppy from '@assets/icons/device-floppy'

// Hooks
import useUpdateUbigeoForm from './useUpdateUbigeoForm'

// Utils
import lazy from '@utils/lazy'
import getFormError from '@utils/getFormError'
import isEmptyObject from '@utils/isEmptyObject'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

// Lazy Components
const Regions = lazy(() => import('@modules/Ubigeo/components/Regions'))
const Countries = lazy(() => import('@modules/Ubigeo/components/Countries'))
const Provinces = lazy(() => import('@modules/Ubigeo/components/Provinces'))
const Districts = lazy(() => import('@modules/Ubigeo/components/Districts'))

export default function UpdateUbigeoForm() {
  const { watch, errors, change, submit, isLoading, handleSubmit } = useUpdateUbigeoForm()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-y-4 lg:ml-auto lg:max-w-[400px]"
    >
      <Fallback classLabel="w-40">
        <Countries
          textLabel="País del autor"
          onChange={change('countryId')}
          selectedValue={watch('countryId')}
          error={getFormError('countryId', errors)}
        />
      </Fallback>

      <Fallback classLabel="w-36">
        <Regions
          textLabel="Región del autor"
          onChange={change('regionId')}
          countryId={watch('countryId')}
          selectedValue={watch('regionId')}
          error={getFormError('regionId', errors)}
        />
      </Fallback>

      <Fallback classLabel="w-36">
        <Provinces
          regionId={watch('regionId')}
          onChange={change('provinceId')}
          textLabel="Provincia del autor"
          selectedValue={watch('provinceId')}
          error={getFormError('provinceId', errors)}
        />
      </Fallback>

      <Fallback classLabel="w-36">
        <Districts
          onChange={change('districtId')}
          provinceId={watch('provinceId')}
          selectedValue={watch('districtId')}
          error={getFormError('districtId', errors)}
          textLabel="Distrito del autor"
        />
      </Fallback>

      <div className="my-3">
        <Button
          type="submit"
          isShowingSpin={isLoading}
          disabled={!isEmptyObject(errors)}
          icon={<DeviceFloppy size="smd" />}
          title="Actualizar mi ubicación"
          titlePopup="Actualizar mi ubicación"
          loadingTitle="Actualizando ubicación..."
          className="!font-lexend !px-4 !py-3 ml-auto bg-blue-500 hover:bg-sky-500 text-white min-w-[215px] rounded-xl dark:hover:opacity-70 dark:bg-blue-600"
        />
      </div>
    </form>
  )
}
