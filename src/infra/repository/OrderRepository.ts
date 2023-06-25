import { Order } from "../../domain/entity";
import { OrderInterface } from "../../domain/repository";
import { OrderItemModel, OrderModel } from "../db/sequelize/model";

export class OrderRepository implements OrderInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create({
      id: entity.id,
      customer_id: entity.customerId,
      total: entity.total(),
      items: entity.items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        product_id: item.productId,
      }))
    }, {
      include: [{ model: OrderItemModel }]
    });
  }
  async update(entity: Order): Promise<void> {
    const sequelize = OrderModel.sequelize;

    await sequelize.transaction(async (transaction) => {
      await OrderItemModel.destroy({
        where: { order_id: entity.id },
        transaction
      });
      const items = entity.items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        product_id: item.productId,
        order_id: entity.id
      }));
      await OrderItemModel.bulkCreate(items, { transaction });
      await OrderModel.update(
        { total: entity.total() },
        { where: { id: entity.id }, transaction }
      );
    });
  }
  async find(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<Order[]> {
    throw new Error("Method not implemented.");
  }
}
