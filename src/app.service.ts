import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    /**
     * First line
     * Second line
     */
    getHello(): string {
        return 'Hello World!';
    }
}
