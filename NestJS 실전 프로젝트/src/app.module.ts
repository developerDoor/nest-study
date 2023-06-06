import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, UsersModule], // CatsModule, UsersModule 등등의 모듈에서 export 한 서비스들을 AppController나 AppService에서 사용할 수 있다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
