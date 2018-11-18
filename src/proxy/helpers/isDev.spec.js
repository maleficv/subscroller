import isDev from './isDev';

describe('isDev helper', () => {
    it('Returns false for testing environment', () => {
        const env = isDev();
        expect(env).toBe(false);
    })
});