import { AbstractHandler } from "./abstractHandler";

export class HandlerSanitizer extends AbstractHandler {

    handle(request: string) {
        console.log('sanitizer handler called')
        
        const clean = request.replace(/[^\w]/g, '');
        
        return super.handle(clean);
    }
}