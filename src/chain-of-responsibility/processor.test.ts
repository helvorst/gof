import { processor } from './processor';

describe('processor', () => {
    it('should run validator and demand request required', () => {
        expect(processor('')).toBe('request is required');
    })

    it('should run sanitizer and remove all non-alphanumerics', () => {
        expect(processor('I\'m Ma&y(a')).toBe('IMMAYA');
    })

    it('should tun transformer to capitalize request', () => {
        expect(processor('gOya')).toBe('GOYA')
    })
})