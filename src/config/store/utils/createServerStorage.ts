/**
 * Create the storage for Server side
 */
export default function createServerStorage() {
  return {
    getItem: () => Promise.resolve(null),
    setItem: (_key: string, value: string) => Promise.resolve(value),
    removeItem: () => Promise.resolve()
  }
}
