// React
import { Fragment } from 'react'

// Librarys
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { MenuItemProps } from '@interfaces'

export default function MenuItem({
  icon,
  title,
  titleStyle,
  showArrow
}: MenuItemProps) {
  return (
    <Fragment>
      {/* Ícono */}
      <FontAwesomeIcon icon={icon} className="me-2" />

      {/* Título */}
      <span style={titleStyle}>{title}</span>

      {/* Flecha abajo */}
      {showArrow ? (
        <FontAwesomeIcon icon="caret-down" className="ms-2" />
      ) : null}
    </Fragment>
  )
}
