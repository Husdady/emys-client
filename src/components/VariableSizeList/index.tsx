/* eslint-disable @typescript-eslint/no-explicit-any */
// Librarys
import { ComponentType, MutableRefObject } from 'react'
import { VariableSizeListProps, VariableSizeList as _VariableSizeList } from 'react-window'

export interface ListProps extends VariableSizeListProps {
  ref: MutableRefObject<_VariableSizeList<any> | null>
}

const VariableSizeList = _VariableSizeList as any as ComponentType<ListProps>

export default VariableSizeList
