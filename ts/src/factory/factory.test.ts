import { thingFactory } from './factory';
describe('factory', () => {
    it('creates Foo instance', () => {
        const thing = thingFactory('foo');
        expect(thing.type).toBe('foo');
    })
    it('creates Bar instance', () => {
        const thing = thingFactory('bar');
        expect(thing.type).toBe('bar');
    })
    it('throws when thing is unknown', () => {
        expect(() => thingFactory('x')).toThrowError('Unknown thing');
    })
})