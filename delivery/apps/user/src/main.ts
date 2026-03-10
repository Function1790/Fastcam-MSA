import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
