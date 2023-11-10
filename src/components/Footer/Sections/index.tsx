// Librarys
import { memo } from 'react'
import { createId } from '@libs/nanoid'
import dynamic from 'next/dynamic'

// Data
import sections from './sections'

// Dynamic Components
const Section = dynamic(() => import('./Section'))
const Buttons = dynamic(() => import('./Buttons'))

function Sections() {
  return (
    <div className="footer-content flex justify-between pb-6 px-[3rem] gap-y-6">
      <Buttons />

      {sections
        ?.map((section) => ({ id: createId(), ...section }))
        ?.map((section) => (
          <Section key={section.id} {...section} />
        ))}
    </div>
  )
}

export default memo(Sections)
