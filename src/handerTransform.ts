import { AbstractHandler } from "./abstractHandler";
import { log } from "./decoratorLog";

export class HandlerTransform extends AbstractHandler {
    @log('transform')
    handle(request: string) {
        console.log('transformation handler called')
        request = request.toUpperCase();
        return super.handle(request);
    }
}