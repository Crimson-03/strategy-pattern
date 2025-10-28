import { IStrategy } from "./interface";

export class Context {
    private strategy : IStrategy;

    constructor(strategy: IStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: IStrategy) {
        console.log('Strategy Changed...');
        this.strategy = strategy;
    }

    performOperation(a: number, b: number) {
        return this.strategy.execute(a, b);
    }
}