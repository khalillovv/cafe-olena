import { IBase } from './root.types'

export interface IMenu extends IBase {
	name: string
}

export type TypeMenuFormState = Partial<Omit<IMenu, 'id' | 'updatedAt'>>
