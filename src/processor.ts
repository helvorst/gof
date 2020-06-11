import { HandlerValidator } from './handlerValidator';
import { HandlerTransform } from './handerTransform';
export const processor = () => {
    // create handlers
    const validator = new HandlerValidator();
    const transformer = new HandlerTransform();
    
    // create chain
    validator.next(transformer);

    // run 1st element in the chain
    const result = validator.handle('foo');

    console.log(result);

    return result;
};

processor();
