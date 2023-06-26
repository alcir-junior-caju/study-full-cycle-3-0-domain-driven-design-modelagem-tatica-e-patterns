import { EventHandlerInterface } from "../../../@shared";
import { CustomerCreatedEvent } from "../CustomerCreatedEvent";

export class SendEmailCustomerSetAddressHandler implements EventHandlerInterface<CustomerCreatedEvent> {
  handle(event: CustomerCreatedEvent): void {
    console.log('Customer Set Address Event', event);
    console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address.street}, ${event.eventData.address.number}, ${event.eventData.address.city}, ${event.eventData.address.state}, ${event.eventData.address.zipCode}`);
  }
}
