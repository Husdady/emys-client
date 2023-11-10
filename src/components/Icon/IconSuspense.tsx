// Librarys
import dynamic from 'next/dynamic'

// Interfaces
import { IconProps } from '@components/Icon/interfaces'

// Dynamic Components
const Icon = dynamic(() => import('@components/Icon'))

export default function IconSuspense({ children, ...props }: IconProps) {
  return <Icon {...props}>{children}</Icon>
}
