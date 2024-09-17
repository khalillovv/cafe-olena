import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CategoryDto {
	@IsString()
	name: string

	@IsNumber()
	menuId: number

	@IsString()
	@IsOptional()
	type: string
}
