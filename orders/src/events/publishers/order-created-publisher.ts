import {OrderCreatedEvent, Publisher, Subjects} from "@chticket/common";


export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;

}

