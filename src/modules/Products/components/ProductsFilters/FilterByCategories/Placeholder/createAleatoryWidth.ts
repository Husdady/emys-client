// Constants
const MIN_WIDTH = 65
const MAX_WIDTH = 190

/**
 * Create aleatory width
 * @returns {string} Aleatory width
 */
export default function createAleatoryWidth(): string {
  // Generate a random number between MIN_WIDTH and MAX_WIDTH
  const width = Math.random() * (MAX_WIDTH - MIN_WIDTH) + MIN_WIDTH

  // Format the number with a maximum of 2 decimal places
  const formattedWidth = width.toFixed(2)

  return `${formattedWidth}px`
}
