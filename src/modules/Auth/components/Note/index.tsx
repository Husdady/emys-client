// Librarys
import React from 'react'

// Interfaces
import { NoteProps } from './interfaces'

const noteStyle = { fontSize: '0.80rem' }

const Note: React.FC<NoteProps> = ({ value }: NoteProps) => {
  return (
    <p
      style={noteStyle}
      className="font-semibold font-lato text-gray-500 leading-tight tracking-tight text-justify"
    >
      {value}
    </p>
  )
}

export default React.memo(Note)
