export class Cat {
    constructor(
        public id: number = 0,
        public url: string
    ) {}

    get catUrl() {
        return this.url;
    }
}
