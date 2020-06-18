import { AbstractHandler } from "./abstractHandler";
import { log } from "./decoratorLog";

export class HandlerSanitizer extends AbstractHandler {
    @log('sanitize')
    handle(request: string) {
        console.log('sanitizer handler called')
        
        const clean = request.replace(/[^\w]/g, '');
        
        return super.handle(clean);
    }
}