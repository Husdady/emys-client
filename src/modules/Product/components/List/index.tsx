// Interfaces
import { ListProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function List({ items, className }: ListProps) {
  return (
    <ul className={classnames([className, 'list-disc pl-5 flex flex-col gap-y-1'])}>
      {items.map((item, i) => (
        <li key={String(i)} className="list-item font-poppins">
          {item}
        </li>
      ))}
    </ul>
  )
}
