import { processor } from './processor';
describe('processor', () => {
    it('should return required error', () => {
        expect(processor('')).toEqual('["request is required"]');
    })
})