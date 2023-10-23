import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import {
    CACHE_MANAGER,
    CacheInterceptor,
    CacheKey,
    CacheTTL,
} from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller()
@UseInterceptors(CacheInterceptor) // WARNING : Only Get Caching
export class CacheController {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    @Get('/cache')
    async getCache() {
        await this.cacheManager.set('key', 'value', 600);

        // await this.cacheManager.set('key', 'value', 5); // ttl

        // await this.cacheManager.del('key');

        // await this.cacheManager.reset();
        const value = await this.cacheManager.get('key');
        console.log(value);
        return 'this';
    }

    @CacheKey('some_routes')
    @CacheTTL(6000)
    @Get('/cache2')
    async getCache2() {
        console.log('test');
        return 'this';
    }
}
