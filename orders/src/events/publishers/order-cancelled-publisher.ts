import {OrderCancelledEvent, Publisher, Subjects} from "@chticket/common";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;

}

