// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'
import Avatar from 'antd/lib/avatar'
import Upload from 'antd/lib/upload/Upload'

// Components
import Edit from '@assets/icons/edit'
import Trash from '@assets/icons/trash'

// Hooks
import useUpload from './useUpload'

// Interfaces
import { UploadPhotoProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { AVATAR_IMG } from '@assets/data/images'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

export const AVATAR_SIZE = 200

const UploadPhoto = ({
  photo,
  titlePopup,
  className,
  containerClassName,
  ...props
}: UploadPhotoProps) => {
  const { onChange, onRemove, beforeUpload, isInvalidPhoto } = useUpload({
    ...props,
    photo: photo
  })

  return (
    <Upload
      name="photo"
      type="select"
      accept="image/*"
      multiple={false}
      showUploadList={false}
      onChange={onChange}
      beforeUpload={beforeUpload}
      className="table mx-auto"
    >
      <div title={titlePopup} className={classnames([containerClassName, 'upload-photo relative'])}>
        {!isInvalidPhoto && (
          <Button
            title=""
            icon={<Trash />}
            onClick={onRemove}
            titlePopup="Eliminar foto"
            className="!absolute scale z-50 !p-1 top-[15%] left-0 text-red-200 !bg-red-700/80 border-2 border-red-900 rounded"
          />
        )}

        <Button
          title="Editar"
          titlePopup="Editar foto"
          className="!absolute z-50 py-1.5 !px-3 font-semibold dark:font-normal bg-gray-200 border-2 border-gray-300/50 dark:text-gray-200 dark:border-gray-800/40 dark:bg-gray-700 gap-x-2 bottom-[18%] right-[-15px] rounded-lg"
          icon={<Edit className="sm" />}
        />

        <Avatar
          size={AVATAR_SIZE}
          src={isInvalidPhoto ? AVATAR_IMG : photo}
          className={classnames([
            className,
            'border-4 dark:border-gray-700',
            isInvalidPhoto ? '!bg-main-700' : null
          ])}
        />
      </div>
    </Upload>
  )
}

export default memo(UploadPhoto)
