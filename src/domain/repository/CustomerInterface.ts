import { Customer } from "../entity";
import { RepositoryInterface } from "./RepositoryInterface";

export interface CustomerInterface extends RepositoryInterface<Customer> {}
