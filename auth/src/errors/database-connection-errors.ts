import {CustomError} from "./custom-error";

export class DatabaseConnectionErrors extends CustomError {
    reason = 'Error connecting to databse';
    statusCode = 500;

    constructor() {
        super('error connecting to db');

        Object.setPrototypeOf(this, DatabaseConnectionErrors.prototype)
    }

    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }
}
