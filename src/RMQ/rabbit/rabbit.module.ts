import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitController } from './rabbit.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NEST_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://admin2:passwd@192.168.0.16:5672/develop'],
                    queue: 'sample.queue',
                    // TODO Options durable ?
                    queueOptions: {
                        durable: true,
                    },
                    prefetchCount: 1,
                },
            },
        ]),
    ],
    controllers: [RabbitController],
    providers: [],
})
export class RabbitModule {}
