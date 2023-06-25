import { Sequelize } from "sequelize-typescript";
import { CustomerModel, OrderItemModel, OrderModel, ProductModel } from "../db/sequelize/model";
import { CustomerRepository } from "./CustomerRepository";
import { Address, Customer, Order, OrderItem, Product } from "../../domain/entity";
import { ProductRepository } from "./ProductRepository";
import { OrderRepository } from "./OrderRepository";

describe('Order repository test', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should create order', async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("customerId", "John Doe");
    const address = new Address("street", 1, "city", "state", "zipCode");
    customer.setAddress(address);
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("productId", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem(
      "orderItemId",
      product.name,
      product.price,
      2,
      product.id
    );

    const order = new Order("orderId", customer.id, [orderItem]);

    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"]
    });

    expect(orderModel.toJSON()).toStrictEqual({
      id: "orderId",
      customer_id: "customerId",
      total: order.total(),
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: "orderId",
          product_id: "productId"
        }
      ]
    });
  });
});
