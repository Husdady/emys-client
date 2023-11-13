// Librarys
import dynamic from 'next/dynamic'
import AntdModal from 'antd/lib/modal'
import { memo, Suspense } from 'react'

// Components
import CircleXmarkSolid from '@assets/icons/circle-xmark-solid'

// Hooks
import useModalSettings from './hooks/useModal'

// Constants
import { modalStyle, ModalContainer } from './constants'

// Styles
import './styles/main.scss'

// Lazy Components
const ModalTitle = dynamic(() => import('./Title'))
const ModalFooter = dynamic(() => import('./Footer'))

function Modal() {
  const {
    icon,
    title,
    footer,
    content,
    onAccept,
    handleClose,
    handleCancel,
    isShowingAcceptButton,
    isShowingCancelButton,
    acceptButtonProps,
    cancelButtonProps,
    isShowing,
    ...modalProps
  } = useModalSettings()

  if (!isShowing) return null

  return (
    <AntdModal
      {...modalProps}
      open
      destroyOnClose
      transitionName="none"
      maskTransitionName="none"
      style={modalStyle}
      onCancel={handleCancel}
      getContainer={ModalContainer}
      title={
        <Suspense fallback={null}>
          <ModalTitle icon={icon} title={title} />
        </Suspense>
      }
      footer={
        <Suspense fallback={null}>
          <ModalFooter
            custom={footer}
            onAccept={onAccept}
            onCancel={handleCancel}
            acceptButtonProps={acceptButtonProps}
            cancelButtonProps={cancelButtonProps}
            isShowingAcceptButton={isShowingAcceptButton}
            isShowingCancelButton={isShowingCancelButton}
          />
        </Suspense>
      }
      closeIcon={
        <Suspense fallback={null}>
          <CircleXmarkSolid
            size="sm"
            useHoverEffect
            onClick={handleClose}
            className="clear-icon mxs flex items-center justify-center text-gray-600/40 dark:text-gray-400"
          />
        </Suspense>
      }
    >
      {content}
    </AntdModal>
  )
}

export default memo(Modal)
