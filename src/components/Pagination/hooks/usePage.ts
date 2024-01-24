// Librarys
import React from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Interfaces
import { PageProps } from '@components/Pagination/interfaces'

// Utils
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PageProps as Props } from '@components/Pagination/constants'

/**
 * Hook that implement the logc of Page component
 * @param {Omit<PageProps, 'isFetching'>} params Receive some props of Page component
 */
export default function usePage({ value, totalPages, onChange }: Omit<PageProps, 'isFetching'>) {
  const [page, setPage] = React.useState(String(value))

  // Evento 'onChange' en input
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const i = isEmptyString(e.target.value) ? 0 : Number(e.target.value)
      if (i < 0 || i > totalPages) return
      setPage(String(i))
    },
    [value]
  )

  // Evento 'keyDown' en input
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') return
      handleUpdatePage()
    },
    [page]
  )

  // Callback que actualiza la paginación
  const handleUpdatePage = React.useCallback(() => {
    const i = Number(page) // Get current page

    onChange?.({
      total: totalPages,
      totalPages: totalPages,
      page: i === 0 ? Props.DEFAULT_PAGE : i
    })

    if (i === 0) return setPage(String(Props.DEFAULT_PAGE))
  }, [page])

  useMounted(() => {
    if (value !== Number(page)) setPage(String(value))
  }, [value])

  return {
    page: page,
    onKeyDown: handleKeyDown,
    onPageChange: handleChange,
    onUpdatePage: handleUpdatePage
  }
}
