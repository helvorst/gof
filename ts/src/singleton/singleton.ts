class MySingleton {
    private secret = 'secret';
    private static instance: MySingleton;
    private constructor() { }
    static getInstanse (): MySingleton {
        if(!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        } 
        return MySingleton.instance;
    }

    getSecret(): string {
        return this.secret;
    }

    setSecret(newSecret: string): void {
        this.secret = newSecret;
    }
}

const client = () => {
    console.log('Singleton example');
    const singletone1 = MySingleton.getInstanse();
    console.log('singleton 1 secret: ', singletone1.getSecret());
    singletone1.setSecret('secretly secret');
    console.log('singletone 1 updated secret: ', singletone1.getSecret());
    const singleton2 = MySingleton.getInstanse();
    console.log('singleton 2 secret: ', singleton2.getSecret());
}

client();