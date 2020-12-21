import express, { Request, Response } from 'express';
import {NotFoundError, requireAuth, validateRequest} from "@chticket/common";
import {body} from "express-validator";
import {Ticket} from "../models/ticket";

const router = express.Router();


router.get('/api/tickets/',async (req: Request, res:Response) => {
    const ticket = await Ticket.find({});

    res.status(200).send(ticket);
})

export {router as indexTicketRouter}
