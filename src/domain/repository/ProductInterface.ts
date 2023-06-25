import { Product } from "../entity";
import { RepositoryInterface } from "./RepositoryInterface";

export interface ProductInterface extends RepositoryInterface<Product> {}
