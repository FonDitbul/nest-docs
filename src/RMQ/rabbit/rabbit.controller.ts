import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('test')
export class RabbitController {
    constructor(@Inject('NEST_SERVICE') private client: ClientProxy) {}

    //TODO https://progressivecoder.com/how-to-create-a-nestjs-rabbitmq-microservice/
    // publishing 하는 법
    // subscription 하는 법 작성하기

    @Get()
    async testPublish() {
        this.client
            .emit({ cmd: 'sample.queue' }, { userId: '12345678' })
            .subscribe();
    }
}
