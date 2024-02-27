// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export type SharedProps = Pick<Product, 'images' | 'coverImage'>
