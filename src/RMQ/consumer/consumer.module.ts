import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';

@Module({
    imports: [],
    controllers: [ConsumerController], // Consumer는 controller로 해야함
    providers: [],
})
export class ConsumerModule {}
