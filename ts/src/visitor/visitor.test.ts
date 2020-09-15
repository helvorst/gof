import { Milk, TotalPriceWithTax, Lemonade } from './visitor';
describe('Visitor', () => {
    it('visits Milk which has 0% tax and calculates total price', () => {
        const milk = new Milk();
        const tax = new TotalPriceWithTax();
        const price = milk.acceptVisitor(tax);
        expect(price).toBe(3);
    }) 
    it('visits Lemonade which has 30% tax and calculates total price', () => {
        const lemonade = new Lemonade();
        const tax = new TotalPriceWithTax();
        const price = lemonade.acceptVisitor(tax);
        expect(price).toBe(2.6);
    }) 
})