import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CategoryDto {
	@IsString()
	name: string

	@IsOptional()
	@IsNumber()
	menuId: number

	@IsString()
	@IsOptional()
	type: string
}
