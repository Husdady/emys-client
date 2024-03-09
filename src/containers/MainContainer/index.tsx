// Interfaces
import { OnlyChildrenProp } from '@config/globalInterfaces'

// Utils
import classnames from '@utils/classnames'

// Data
import fonts from '@assets/data/fonts'

export default function MainContainer({ children }: OnlyChildrenProp) {
  return (
    <main className={classnames([fonts, 'main-container'])}>
      <div id="global-mask"></div>
      {children}
    </main>
  )
}
