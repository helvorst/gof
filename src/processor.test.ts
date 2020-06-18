import { processor } from './processor';

suite('processor', () => {
    test('should return required error', () => {
        chai.assert.equal(processor(''), '["request is required"]');
    })
})