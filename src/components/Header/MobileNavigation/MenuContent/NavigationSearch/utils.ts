// Interfaces
import { ResultsProps } from './Results/interfaces'
import {
  NavigationLink,
  NavigationItemProps
} from '@modules/Dashboard/components/MenuLeft/interfaces'

/**
 * Extract nested navigation item
 * @param {NavigationItemProps} item Navigation Item
 * @returns {ResultsProps['data']} Navigation Items
 */
export function extractNavigationItem(item: NavigationItemProps): ResultsProps['data'] {
  const results: ResultsProps['data'] = []
  const { navigationItems, ...itemProps } = item

  results.push(itemProps)

  if (Array.isArray(navigationItems)) {
    // Push nested items
    navigationItems.forEach((navigationitem) =>
      results.push(...extractNavigationItem(navigationitem))
    )
  }

  return results
}

/**
 * Extract nested navigation items
 * @param {NavigationItemProps[]} items Navigation Items
 * @returns {ResultsProps['data']} Navigation Items
 */
export function extractNavigationItems(items: NavigationItemProps[]): ResultsProps['data'] {
  const results: ResultsProps['data'] = []

  for (const item of items) {
    results.push(...extractNavigationItem(item))
  }

  return results
}

/**
 * Extract all nested navigation items
 * @param {NavigationLink[]} navigation Navigation Links
 * @returns {ResultsProps['data']} Navigation Items
 */
export function extractNavigation(navigation: NavigationLink[]): ResultsProps['data'] {
  const results: ResultsProps['data'] = [] // Define the results

  // Get navigation items
  const navigationItems = navigation.map((item) => item.navigationItems)

  for (const items of navigationItems) {
    if (!Array.isArray(items)) continue // Check if result is a valid array
    if (items.length === 0) continue // Check if not its empty navigation items

    // Extract navigation items
    results.push(...extractNavigationItems(items))
  }

  return results // Return results
}
