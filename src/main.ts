import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
    ClientProviderOptions,
    MicroserviceOptions,
    Transport,
} from '@nestjs/microservices';
import { AllExceptionsFilter } from './common/exceptions/all-exceptiosn.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //https://tedjunny.tistory.com/entry/%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B0%84%EC%9D%98-%EB%A9%94%EC%84%B8%EC%A7%80%EB%A5%BC-%EC%A3%BC%EA%B3%A0%EB%B0%9B%EC%9E%90
    // consumer 하기 위해선 다음과 같이 설정
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://admin2:passwd@192.168.0.16:5672/develop'],
            queue: 'sample.queue',
            queueOptions: {
                durable: true,
            },
        },
    });

    // const app = await NestFactory.create(AppModule);
    const { httpAdapter } = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    app.useGlobalPipes(new ValidationPipe());
    await app.startAllMicroservices();
    await app.listen(3000);
}
bootstrap();
