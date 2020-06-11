import { Handler } from "./handler";

export class AbstractHandler implements Handler {
    private nextHandler: Handler | undefined;

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
}