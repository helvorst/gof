import { HandlerSanitizer } from './handlerSanitizer';
import { HandlerValidator } from './handlerValidator';
import { HandlerTransform } from './handerTransform';
export const processor = (request: string) => {
    
    // create handlers
    const validator = new HandlerValidator();
    const sanitizer = new HandlerSanitizer();
    const transformer = new HandlerTransform();
    
    // create chain
    validator
        .next(sanitizer)
        .next(transformer);

    // run 1st element in the chain
    const result = validator.handle(request);

    console.log('result in processor:', result)
    return result;

    
};

processor('!!f   oo');

// https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4
// 1. method
// 2. class: 
// 3. property: getter and setter
// 4. argument: greet(@logParameter message: string)
