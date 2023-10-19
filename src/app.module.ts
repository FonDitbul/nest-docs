import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { RabbitModule } from './rabbit/rabbit.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
    imports: [CatsModule, RabbitModule, ConsumerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
