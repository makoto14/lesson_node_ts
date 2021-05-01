import { Factory } from "./Factory";
import { IdCardFactory } from "./IdCardFactory";
import { Product } from "./Product";

let factory: Factory = new IdCardFactory();

let card1: Product = factory.create("hoge");

// console.log(card1);

card1.use();