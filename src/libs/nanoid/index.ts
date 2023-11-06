// Librarys
import * as nanoid from 'nanoid'

// Constants
import * as constants from './constants'

export const createId = nanoid.customAlphabet(
  constants.ALPHABET,
  constants.IDENTIFIER_LENGTH
)
