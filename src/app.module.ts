import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule {}