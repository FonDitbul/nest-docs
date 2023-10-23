import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { RabbitModule } from './RMQ/rabbit/rabbit.module';
import { ConsumerModule } from './RMQ/consumer/consumer.module';
import { HeroesGameModule } from './CQRS/heroes-game.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { CacheController } from './cache/cache.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
    imports: [
        CatsModule,
        RabbitModule,
        ConsumerModule,
        HeroesGameModule,
        CacheModule.register(),
    ],
    controllers: [AppController, CacheController],
    providers: [
        AppService,
        // {
        //     provide: APP_INTERCEPTOR, // Cache Global
        //     useClass: CacheInterceptor,
        // },
    ],
})
export class AppModule {}
