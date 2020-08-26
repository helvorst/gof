import { AbstractHandler } from "./abstractHandler";

export class HandlerTransform extends AbstractHandler {
    handle(request: string) {
        console.log('transformation handler called')
        request = request.toUpperCase();
        return super.handle(request);
    }
}