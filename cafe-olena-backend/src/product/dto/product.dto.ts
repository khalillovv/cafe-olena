import { IsNumber, IsOptional, IsString } from 'class-validator'

export class ProductDto {
	@IsString()
	name: string

	@IsString()
	@IsOptional()
	ingredients: string

	@IsString()
	price: string

	@IsString()
	@IsOptional()
	grams: string

	@IsNumber()
	categoryId: number

	@IsString()
	createdAt: string

	@IsString()
	updatedAt: string
}
