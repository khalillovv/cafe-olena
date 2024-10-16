import { IsNumber, IsString } from 'class-validator'

export class CategoryDto {
	@IsString()
	name: string

	@IsNumber()
	menuId: number

	@IsString()
	createdAt: string

	@IsString()
	updatedAt: string
}
