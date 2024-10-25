import { IProduct } from './product.types'
import { IBase } from './root.types'

export interface ICategory extends IBase {
	name: string
	menuId: number
	products?: IProduct[]
}

export interface ICategoryForm {
	name: string
	menuId: number
}

export type TypeCategoryFormState = Partial<Omit<ICategory, 'id' | 'updatedAt'>>
