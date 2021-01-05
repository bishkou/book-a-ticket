import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@chticket/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
