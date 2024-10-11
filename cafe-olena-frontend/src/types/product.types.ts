import { IBase } from './root.types'

export interface IProduct extends IBase {
	name: string
	ingredients?: string
	price: string
	grams?: string
	gramsType?: string
	categoryId: number
}

export type TypeProductFormState = Partial<Omit<IProduct, 'id' | 'updatedAt'>>
