// Utils
import isEmptyArray from '@utils/isEmptyArray'

/**
 * Check that the new information is not the same as the current one, this function is used in PATCH requests where a document must be updated
 * @param {Payload} payload New information
 * @param {Entity} entity Entity or document that should be compared with the information received
 * @returns {boolean} boolean
 */
export default function hasSameObjectData<Payload extends object, Entity extends object>(
  payload: Payload,
  entity: Entity
): boolean {
  try {
    const keys = Object.keys(payload) // Obtener campos de 'payload'

    if (isEmptyArray(keys)) return false // Se retorna false cuando 'payload' es un objeto vacío

    // Comprobar que cada valor de la propiedad de la entidad sea igual al valor de cada propiedad del payload
    return keys.every((key) => {
      return (
        JSON.stringify(entity[key as keyof typeof entity]) ===
        JSON.stringify(payload[key as keyof typeof payload])
      )
    })
  } catch (err) {
    return false
  }
}
