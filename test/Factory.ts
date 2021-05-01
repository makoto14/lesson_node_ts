import { Product } from './Product';

export abstract class Factory {
    create(owner: string): Product {
        let p: Product = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    }

    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
}