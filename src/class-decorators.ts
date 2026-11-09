type Constructor = new (...args: any[]) => object;

function classDecorator<T extends Constructor>(
  target: T,
  context: ClassDecoratorContext<T>,
) {
  return class extends target {
    private accountWallet: number = 100;

    getAccountWallet() {
      return this.accountWallet;
    }
  };
}

interface Person {
  getAccountWallet(): number;
}

@classDecorator
class Person {
  constructor(private firstName: string) {}
  getName() {
    return this.firstName;
  }
}

const person = new Person("John");
console.log(person.getAccountWallet());
console.log(person.getName());
