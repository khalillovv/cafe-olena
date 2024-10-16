import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
// import * as cookieParser from 'cookie-parser'
import cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)

	const PORT = configService.get<number>('PORT')
	const CORS_ADDRESS = configService.get<string>('CORS_ADDRESS')

	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		origin: [CORS_ADDRESS],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		credentials: true,
		allowedHeaders: 'Content-Type, Authorization',
		exposedHeaders: 'set-cookie',
	})

	await app.listen(PORT)
}
bootstrap()
