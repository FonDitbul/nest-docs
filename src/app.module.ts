import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { RabbitModule } from './RMQ/rabbit/rabbit.module';
import { ConsumerModule } from './RMQ/consumer/consumer.module';
import { HeroesGameModule } from './CQRS/heroes-game.module';

@Module({
    imports: [CatsModule, RabbitModule, ConsumerModule, HeroesGameModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
