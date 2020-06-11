import { AbstractHandler } from "./abstractHandler";

export class HandlerValidator extends AbstractHandler {
    handle(request: string) {
        if(!request) {
            this.write('request is required');
            return this.result();
        } else {
            return super.handle(request);
        }
    }
}