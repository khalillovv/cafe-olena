import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common'
import { Auth } from '../auth/decorators/auth.decorator'
import { MenuDto } from './dto/menu.dto'
import { MenuService } from './menu.service'

@Controller('menu')
export class MenuController {
	constructor(private readonly menuService: MenuService) {}

	@Get()
	async getAll() {
		return this.menuService.getAll()
	}

	@Post()
	@HttpCode(200)
	@Auth()
	async create(@Body() dto: MenuDto) {
		return this.menuService.create(dto)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id', ParseIntPipe) id: number) {
		return this.menuService.delete(id)
	}
}
