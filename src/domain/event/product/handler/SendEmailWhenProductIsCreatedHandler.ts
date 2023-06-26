import { EventHandlerInterface } from "../../EventHandlerInterface";
import { ProductCreatedEvent } from "../ProductCreatedEvent";

export class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
      console.log(`Send email to ....`);
    }
}
