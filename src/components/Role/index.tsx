// Components
import Tag from '@components/Tag'
import ShieldChevron from '@components/Icons/ShieldChevron'

// Interfaces
import { RoleProps } from './interfaces'
import classnames from '@utils/classnames'

// Utils
import truncate from '@utils/truncate'

export default function Role({ name, limit = 20, className }: RoleProps) {
  return (
    <Tag
      title={truncate(name, limit)}
      icon={<ShieldChevron size="sm" />}
      className={classnames([className, '!text-yellow-200 bg-purple-600'])}
    />
  )
}
