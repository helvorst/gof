abstract class Product {
    price: number;
    constructor() {
        this.price = 0;
    }

    acceptVisitor(visitor: TaxVisitor) {

    }
}

export class Milk extends Product {
    constructor() {
        super();
        this.price = 3;
    }
    acceptVisitor(visitor: TaxVisitor): number {
        return visitor.taxMilkAndCalculateTotalPrice(this);
    }
}

export class Lemonade extends Product {
    constructor() {
        super();
        this.price = 2;
    }
    acceptVisitor(visitor: TaxVisitor): number {
        return visitor.taxLemonadeAndCalculateTotalPrice(this);
    }
}

interface TaxVisitor {
    taxMilkAndCalculateTotalPrice: (product: Milk) => number;
    taxLemonadeAndCalculateTotalPrice: (product: Lemonade) => number;
}

export class TotalPriceWithTax implements TaxVisitor {
    taxMilkAndCalculateTotalPrice(product: Milk) {
        return product.price * 1.0;
    }

    taxLemonadeAndCalculateTotalPrice(product: Lemonade) {
        return product.price * 1.3;
    }
}