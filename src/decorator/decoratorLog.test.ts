import { log } from "./decoratorLog";

describe('decorator', () => {

    it('decorates class method', () => {
        class Test {
            base: number;
            constructor(base: number) {
                this.base = base;
            }
            @log('test class decorator')
            addToBase(addition: number): void {
                this.base += addition;
            }
        }
        
        const spy = jest.spyOn(console, 'log');
        const test = new Test(0);
        test.addToBase(1);
        expect(spy).toBeCalledTimes(1);
        //origin: test class decorator,  call: addToBase,  args: 1,  result: undefined
        expect(spy).lastCalledWith("origin: test class decorator, ", "call: addToBase, ", "args: 1, ", "result: undefined")
    })
})
