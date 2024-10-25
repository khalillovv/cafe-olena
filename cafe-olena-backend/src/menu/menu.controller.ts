import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
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

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async update(
		@Body() dto: Partial<MenuDto>,
		@Param('id', ParseIntPipe) id: number
	) {
		return this.menuService.update(dto, id)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async delete(@Param('id', ParseIntPipe) id: number) {
		return this.menuService.delete(id)
	}
}
