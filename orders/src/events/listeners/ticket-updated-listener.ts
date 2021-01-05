import {Listener, Subjects, TicketUpdatedEvent} from "@chticket/common";
import {queueGroupName} from "./queue-group-name";
import { Message } from 'node-nats-streaming'
import {Ticket} from "../../models/ticket";


export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    queueGroupName = queueGroupName;

    async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
        const ticket = await Ticket.findByEvent(data);

        if (!ticket) {
            throw new Error('Ticket not found');
        }

        const { title, price } = ticket;
        ticket.set({ title, price });
        await ticket.save();

        msg.ack();

    }
}

