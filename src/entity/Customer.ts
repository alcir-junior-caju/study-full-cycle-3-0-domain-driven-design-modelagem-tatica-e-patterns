// Complexidade de negócio
// Domain
//  - entity
//    - customer (regra de negócio)
// -----------------------------------
// Complexidade acidental
// infra
//  - Entity / Model
//    - customer (get, set)
// -----------------------------------
// Entidade Anêmica

import { Address } from "./Address";

export class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  // Auto validar a entidade
  // Devemos ter consistencia na entidade
  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate the customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  setAddress(address: Address) {
    this._address = address;
  }
}
