import { processor } from './processor';
describe('processor', () => {
    it('should return hello', () => {
        expect(processor()).toEqual('FOO<VALID>');
    })
})