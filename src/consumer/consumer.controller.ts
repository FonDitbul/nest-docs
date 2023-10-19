import { Controller, Injectable } from '@nestjs/common';
import {
    Ctx,
    EventPattern,
    MessagePattern,
    Payload,
    RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ConsumerController {
    @MessagePattern({ cmd: 'sample.queue' })
    async handlerMessage(
        @Payload() subscriber: any,
        @Ctx() context: RmqContext,
    ) {
        console.log(subscriber);
        const channel = context.getChannelRef();
        const originalMsg = context.getMessage();

        // console.log(channel);
        // console.log(originalMsg);
        // channel.ack(originalMsg);
    }
}
