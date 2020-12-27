import { Publisher, Subjects, TicketUpdatedEvent } from '@chticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
