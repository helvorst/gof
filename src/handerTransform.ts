import { AbstractHandler } from "./abstractHandler";

export class HandlerTransform extends AbstractHandler {
    handle(request: string) {
        request = request.toUpperCase();
        return super.handle(request);
    }
}