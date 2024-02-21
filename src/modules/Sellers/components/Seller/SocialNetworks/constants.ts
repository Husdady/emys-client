// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { SocialNetworkItem } from './interfaces'

// Constants
import icons, { TWITTER, FACEBOOK, LINKEDIN, INSTAGRAM } from './icons'

export const socialNetworkList: SocialNetworkItem[] = [
  { name: TWITTER, icon: icons[TWITTER] },
  { name: LINKEDIN, icon: icons[LINKEDIN] },
  { name: FACEBOOK, icon: icons[FACEBOOK] },
  { name: INSTAGRAM, icon: icons[INSTAGRAM] }
].map((socialNetwork) => ({ ...socialNetwork, id: createId() }))
