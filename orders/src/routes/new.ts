import express, {Request, Response} from "express";
import {BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest} from "@chticket/common";
import {body} from "express-validator";
import mongoose from "mongoose";
import {Ticket} from "../models/ticket";
import {Order} from "../models/order";

const router = express.Router();

router.post('/api/orders', requireAuth, [
    body('ticketId')
        .not()
        .isEmpty()
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('TicketId must be provided')

], validateRequest, async (req: Request, res: Response) => {
    const { ticketId } = req.body

    // Find the ticket the user is trying to order in the database
    const ticket = await Ticket.findById(ticketId);
    if(!ticket){
        throw new NotFoundError();
    }

    // Make sure that this ticket is not already reserved
    const isReserved = await ticket.isReseved()
    if (isReserved) {
        throw new BadRequestError('Ticket is already reserved')
    }

    // Calculate an expiration date for this order

    // Build the order and save it to the database

    // Publish an event saying that an order was created

    res.send({});
}
)
;

export {router as newOrderRouter};
