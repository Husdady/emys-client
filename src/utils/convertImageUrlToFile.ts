/* eslint-disable @typescript-eslint/no-explicit-any */
// Interfaces
import { UploadFile } from 'antd'

// Utils
import isString from './isString'
import isUndefined from './isUndefined'

const DEFAULT_FILENAME = 'image'

interface ConvertImageUrlToFileParams {
  url?: string
  filename?: string
  backupFilename?: string
  file?: File | UploadFile<any>
}

/**
 * Convert url image to File object
 * @param {ConvertImageUrlToFileParams} params Receive a 'url', 'file', 'filename' and 'backupFilename'
 * @returns {Promise<File | undefined>} File object or undefined
 */
export default async function convertImageUrlToFile({
  url,
  file,
  filename,
  backupFilename
}: ConvertImageUrlToFileParams): Promise<File | UploadFile<any> | undefined> {
  // Validate file
  if (file !== null && !isUndefined(file)) return file

  // Check if exists image url, filename and backup of the filename
  if (isUndefined(url)) return undefined

  // Define the filename of the image
  let imageName = DEFAULT_FILENAME
  if (isString(filename)) imageName = filename // Update filename
  if (isString(backupFilename)) imageName = backupFilename // Update backup filename

  const response = await fetch(url) // Fetch image url
  const blob = await response.blob() // Convert response to Blob object
  return new File([blob], imageName, { type: blob.type }) // Convert Blob object to File object
}
