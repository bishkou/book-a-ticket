import { Publisher, Subjects, TicketCreatedEvent } from '@chticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
