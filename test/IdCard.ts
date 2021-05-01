import { Product } from './Product';

export class IdCard extends Product {
    public readonly owner: string;

    constructor(owner: string) {
        super();
        console.log(`${owner} さんのカードを作成します。`);
        this.owner = owner;
    }

    public use(): void {
        console.log(`${this.owner} さんのカードを使用します。`)
    }
}