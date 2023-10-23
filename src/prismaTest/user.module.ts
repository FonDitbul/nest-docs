import { RepositoryModule } from './database/repository.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [RepositoryModule],
    controllers: [],
    providers: [],
    exports: [],
})
export class UserModule {}
