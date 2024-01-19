// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { SocialNetworkItem } from './interfaces'

// Constants
import icons from './icons'

export const TWITTER = 'Twitter'
export const FACEBOOK = 'Facebook'
export const INSTAGRAM = 'Instagram'
export const LINKEDIN = 'LinkedIn'

export const socialNetworkList: SocialNetworkItem[] = [
  { name: TWITTER, icon: icons.twitter },
  { name: LINKEDIN, icon: icons.linkedin },
  { name: FACEBOOK, icon: icons.facebook },
  { name: INSTAGRAM, icon: icons.instagram }
].map((socialNetwork) => ({ ...socialNetwork, id: createId() }))
