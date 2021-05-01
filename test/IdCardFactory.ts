import { IdCard } from "./IdCard";
import { Factory } from "./Factory";
import { Product } from "./Product";


export class IdCardFactory extends Factory {
    public readonly owners: Array<String> = [];

    protected createProduct(owner: string): Product {
        return new IdCard(owner);
    }
    protected registerProduct(product: Product): void {
        this.owners.push((<IdCard>product).owner);
    }

}