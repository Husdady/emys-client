// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { SocialNetworkItem } from '@modules/Sellers/components/Seller/SocialNetworks/interfaces'

// Constants
import icons, {
  TWITTER,
  FACEBOOK,
  WHATSAPP,
  INSTAGRAM,
  MESSENGER
} from '@modules/Sellers/components/Seller/SocialNetworks/icons'

export const socialNetworkList: SocialNetworkItem[] = [
  { name: TWITTER, icon: icons[TWITTER] },
  { name: FACEBOOK, icon: icons[FACEBOOK] },
  { name: WHATSAPP, icon: icons[WHATSAPP] },
  { name: INSTAGRAM, icon: icons[INSTAGRAM] },
  { name: MESSENGER, icon: icons[MESSENGER] }
].map((socialNetwork) => ({ ...socialNetwork, id: createId() }))
