import { IsString } from 'class-validator'

export class MenuDto {
	@IsString()
	name: string

	@IsString()
	createdAt: string

	@IsString()
	updatedAt: string
}
