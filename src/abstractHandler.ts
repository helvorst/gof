import { Handler } from "./handler";

export class AbstractHandler implements Handler {
    private nextHandler: Handler | undefined;
    private message = '';

    next(handler: Handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    }

    handle(request: string) {
        if(this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return request;
    }

    write(message: string) {
        this.message = message;
    }

    result(): string {
        return this.message;
    }
}