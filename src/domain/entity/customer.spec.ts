import { Address } from "./Address";
import { Customer } from "./Customer";

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Customer('', 'John Doe');
    }).toThrowError('Id is required');
  });

  it('should throw error when name is empty', () => {
    expect(() => {
      new Customer('123', '');
    }).toThrowError('Name is required');
  });

  it('should throw error when address is undefined when you activate a customer', () => {
    expect(() => {
      const customer = new Customer('123', 'John Doe');
      customer.activate();
    }).toThrowError('Address is mandatory to activate the customer');
  });

  it('should change name', () => {
    const customer = new Customer('123', 'John Doe');
    customer.changeName('Jane Doe');
    expect(customer.name).toBe('Jane Doe');
  });

  it('should activate customer', () => {
    const customer = new Customer('123', 'John Doe');
    const address = new Address("Street 1", 100, "City 1", "State 1", "ZipCode 1");
    customer.setAddress(address);

    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it('should deactivate customer', () => {
    const customer = new Customer('123', 'John Doe');

    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it('should add reward points', () => {
    const customer = new Customer('123', 'John Doe');
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
