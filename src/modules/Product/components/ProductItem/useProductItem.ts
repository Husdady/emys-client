// Hooks
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'
import { showFloatInfoMessage } from '@libs/antd/message'

/**
 * Hook for implements the logic of the ProductItem component
 */
export default function useProductItem() {
  const isBiggestTabletScreen = useBiggestTabletScreen()

  useMounted(() => {
    if (!isBiggestTabletScreen) {
      showFloatInfoMessage(
        'Si la cabezera te incomoda al visualizar la información del producto. Puedes ocultarla, haciendo click en el ícono de un ojo de color rosa que está al lado derecho'
      )
    }
  }, [isBiggestTabletScreen])
}
