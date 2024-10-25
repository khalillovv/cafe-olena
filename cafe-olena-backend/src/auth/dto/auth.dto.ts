import { IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsString()
	name: string

	@MinLength(6, {
		message: 'Пароль має бути не менше 6 символів',
	})
	@IsString()
	password: string
}
