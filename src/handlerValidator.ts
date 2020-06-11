import { AbstractHandler } from "./abstractHandler";

export class HandlerValidator extends AbstractHandler {
    handle(request: string) {
        request = request + '<valid>';
        return super.handle(request);
    }
}