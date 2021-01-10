import {PaymentCreatedEvent, Publisher, Subjects} from "@chticket/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}

