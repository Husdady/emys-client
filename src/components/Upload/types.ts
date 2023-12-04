/* eslint-disable @typescript-eslint/no-explicit-any */
// Interfaces
import { UploadPhotoProps } from './interfaces'
import { UploadFile, UploadChangeParam } from 'antd/lib/upload/interface'

export type InfoParam = UploadChangeParam<UploadFile<any>>

export type UseUploadPhotoParams = Pick<UploadPhotoProps, 'photo' | 'onChange' | 'onRemove'>
