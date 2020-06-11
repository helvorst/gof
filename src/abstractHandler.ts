import { Handler } from "./handler";

export class AbstractHandler implements Handler {
    private nextHandler: Handler | undefined;
    private messages: Array<string> = [];

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
        this.messages.push(message);
    }

    result(): string {
        return JSON.stringify(this.messages);
    }
}