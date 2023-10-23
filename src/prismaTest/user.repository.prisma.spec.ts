import {
    MockContext,
    Context,
    createMockContext,
} from './database/infrastructure/context';

describe('UserRepositoryPrisma unit test', () => {
    let mockCtx: MockContext;
    let ctx: Context;

    beforeEach(() => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;
    });
});
