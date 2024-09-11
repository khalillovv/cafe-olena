import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';

@Module({
	imports: [ConfigModule.forRoot(), AuthModule, UserModule, CategoryModule, MenuModule, ProductModule],
})
export class AppModule {}
