import { Context } from "./context";
import { Add, Mul, Sub } from "./strategies";

export class Calculator {
    private a: number;
    private b: number;
    private context : Context;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
        this.context = new Context(new Add());
    }

    performAction(action: string) {
        if (action === "add") {
            this.context.setStrategy(new Add());
        } else if (action === "sub") {
            this.context.setStrategy(new Sub());
        } else if (action === "mul") {
            this.context.setStrategy(new Mul());
        }

        return this.context.performOperation(this.a, this.b);
    }
}


const calc = new Calculator(1,2);
console.log(calc.performAction("add"));
console.log(calc.performAction("mul"));
console.log(calc.performAction("sub"));