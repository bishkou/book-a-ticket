import {Listener, OrderCancelledEvent, Subjects} from "@chticket/common";
import {queueGroupName} from "./queue-group-name";
import { Message } from 'node-nats-streaming'
import {Order} from "../../models/order";
import {OrderStatus} from "@chticket/common";


export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    queueGroupName = queueGroupName;

    async onMessage(data: OrderCancelledEvent["data"], msg: Message) {

        const order = await Order.findOne({
            _id: data.id,
            version: data.version - 1
        })

        if (!order) {
            throw new Error('Order not found');
        }

        order.set({ status: OrderStatus.Cancelled });
        await order.save();

        msg.ack();
    }
}
 
