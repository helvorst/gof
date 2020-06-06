import { hello } from './processor';
describe('processor', () => {
    it('should return hello', () => {
        expect(hello()).toEqual('hello');
    })
})