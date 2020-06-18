import "reflect-metadata";

export function log(origin: string) {

    return function (
        target: Object,
        property: string,
        propertyDescriptor: PropertyDescriptor): PropertyDescriptor {

        const t = Reflect.getMetadata("design:type", target, property);
        console.log(t);

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