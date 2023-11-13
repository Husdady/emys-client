// Librarys
import { message } from 'antd'

// Types
import type { Key } from 'react'
import type { JointContent } from './types'

// Constants
import * as duration from './constants'

/**
 * Hide all float messages
 * @returns {void} Void
 */
export function hideAllFloatMessages(): void {
  message.destroy()
}

/**
 * Hide a float message by key
 * @param {Key} messageKey Message key
 * @returns {void} Void
 */
export function hideFloatMessageByKey(messageKey: Key): void {
  message.destroy(messageKey)
}

/**
 * Show an error message on the screen
 * @param {JointContent} content Message content
 * @param {VoidFunction|undefined} onClose Callback 'onClose'
 * @returns {void} Void
 */
export function showFloatErrorMessage(content: JointContent, onClose?: VoidFunction): void {
  void message.error(content, duration.ERROR_DELAY_TIME, onClose)
}

/**
 * Show a success message on the screen
 * @param {JointContent} content Message content
 * @param {VoidFunction|undefined} onClose Callback 'onClose'
 * @returns {void} Void
 */
export function showFloatSuccessMessage(content: JointContent, onClose?: VoidFunction): void {
  void message.success(content, duration.SUCCESS_DELAY_TIME, onClose)
}

/**
 * Show a info message on the screen
 * @param {JointContent} content Message content
 * @param {VoidFunction|undefined} onClose Callback 'onClose'
 * @returns {void} Void
 */
export function showFloatInfoMessage(content: JointContent, onClose?: VoidFunction): void {
  void message.info(content, duration.INFO_DELAY_TIME, onClose)
}

/**
 * Show a warning message on the screen
 * @param {JointContent} content Message content
 * @param {VoidFunction|undefined} onClose Callback 'onClose'
 * @returns {void} Void
 */
export function showFloatWarningMessage(content: JointContent, onClose?: VoidFunction): void {
  void message.warning(content, duration.WARNING_DELAY_TIME, onClose)
}

/**
 * Show a loading message on the screen
 * @param {JointContent} content Message content
 * @param {VoidFunction|undefined} onClose Callback 'onClose'
 * @returns {void} Void
 */
export function showFloatLoadingMessage(content: JointContent, onClose?: VoidFunction): void {
  void message.loading(content, undefined, onClose)
}
