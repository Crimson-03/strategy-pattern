import { IStrategy } from "./interface";

export class Add implements IStrategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class Sub implements IStrategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class Mul implements IStrategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class div implements IStrategy {
  execute(a: number, b: number): number {
    return a / b;
  }
}
