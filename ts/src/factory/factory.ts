abstract class Thing {
    type: string;
    constructor() {
        this.type = 'a thing';
    }
}

class Foo extends Thing {
    constructor() {
        super();
        this.type = 'foo';
    }
}

class Bar extends Thing {
    constructor() {
        super();
        this.type = 'bar';
    }
}

export const thingFactory = (type: string): Thing => {
    switch(type) {
        case 'foo': 
            return new Foo();
        case 'bar':
            return new Bar();
        default:
            throw new Error('Unknown thing');
                
    }
}