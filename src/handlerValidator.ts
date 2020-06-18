import { AbstractHandler } from "./abstractHandler";
import { log } from "./decoratorLog";

export class HandlerValidator extends AbstractHandler {
    @log('validate')
    handle(request: string) {
        console.log('validation handler called')
        if(!request) {
            this.write('request is required');
            return this.result();
        } else {
            return super.handle(request);
        }
    }
}