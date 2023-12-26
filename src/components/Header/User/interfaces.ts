// Interfaces
export interface MenuData {
  hideMenu: VoidFunction
  showMenu: VoidFunction
  isShowingMenu: boolean
  toggleMenu: () => void
}

export interface UserProps {
  menuData: MenuData
  className?: string
}
