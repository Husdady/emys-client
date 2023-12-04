// Hooks
import { useRef, useMemo, useCallback } from 'react'

// Types
import type { InfoParam, UseUploadPhotoParams } from './types'

// Utils
import isUndefined from '@utils/isUndefined'

export function beforeUpload() {
  return false
}

/**
 * Hook that implements the logic of Upload Photo component
 * @param {UseUploadPhotoParams} param Receive some props of Upload component
 * @returns
 */
export default function useUploadPhoto({ photo, onChange, onRemove }: UseUploadPhotoParams) {
  const preview = useRef<string | null>(null)

  // Check if the photo has not defined
  const isInvalidPhoto = useMemo(() => photo === null || isUndefined(photo), [photo])

  // Event for remove the current photo
  const onRemovePhoto = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation() // Stop propagation with onChange event
    if (typeof onRemove !== 'function') return // Finish function
    onRemove(e) // Remove the photo

    if (preview.current === null) return

    // Revoke preview generated photo
    URL.revokeObjectURL(preview.current)
  }, [])

  // Event for change the current photo
  const onChangePhoto = useCallback((info: InfoParam) => {
    if (typeof onChange !== 'function') return // Finish function

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const previewFile = URL.createObjectURL(info.file as any) // Create preview file
    preview.current = previewFile // Assign to ref the preview file

    // Change current photo
    onChange({
      file: info.file,
      fileList: info.fileList,
      previewFile: previewFile
    })
  }, [])

  return {
    onChange: onChangePhoto,
    onRemove: onRemovePhoto,
    beforeUpload: beforeUpload,
    isInvalidPhoto: isInvalidPhoto
  }
}
