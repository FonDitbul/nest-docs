// commands 는 상태를 변경하는 데 사용

export class KillDragonCommand {
    constructor(
        public readonly heroId: string,
        public readonly dragonId: string,
    ) {}
}
