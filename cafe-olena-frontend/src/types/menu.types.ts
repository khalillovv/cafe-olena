import { ICategory } from './category.types'
import { IBase } from './root.types'

export interface IMenu extends IBase {
	name: string
	categories?: ICategory[]
}

export type TypeMenuFormState = Partial<Omit<IMenu, 'id' | 'updatedAt'>>
