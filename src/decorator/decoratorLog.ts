export function log(origin: string): (
    target: Object,
    property: string,
    propertyDescriptor: PropertyDescriptor) => PropertyDescriptor {

    return function (
        target: Object,
        property: string,
        propertyDescriptor: PropertyDescriptor): PropertyDescriptor {

        const method = propertyDescriptor.value;

        const decoratedMethod = function (...args: any[]) {
            //@ts-ignore
            const result = method.apply(this as any, args);
            
            console.log(
                `origin: ${origin}, `,
                `call: ${property}, `,
                `args: ${args}, `,
                `result: ${result}`);
            return result;
        }

        // replace original method w/ decorated method
        return {
            ...propertyDescriptor,
            value: decoratedMethod
        };
    }

}