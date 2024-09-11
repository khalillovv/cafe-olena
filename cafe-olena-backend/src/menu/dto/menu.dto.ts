import { IsString } from 'class-validator'

export class MenuDto {
	@IsString()
	name: string
}
