import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        HTTP_PORT: Joi.string().required(),
        DB_URL: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config :ConfigService) => ({
        type: 'postgres',
        url: config.getOrThrow('DB_URL'),
        autoLoadEntities: true,
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
