import { Address, Customer, Order, OrderItem } from "./entity";

// Customer Aggregate - ID
let customer = new Customer("1", "John Doe");
const address = new Address("Street 1", 100, "City 1", "State 1", "ZipCode 1");
customer.setAddress(address);
customer.activate();

// Order Aggregate - Object / Entity
const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 20);
const order = new Order("1", '123', [item1, item2]);
