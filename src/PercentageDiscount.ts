import type { DiscountInterface } from "./DiscountInterface";

export class PercentageDiscount implements DiscountInterface {
  constructor(private readonly value: number) {}

  apply(orderAmount: number): number {
    if (this.value >= 100 || this.value <= 1) {
      throw new Error("Coloque uma porcentagem entre 100 e 1");
    }

    return orderAmount - (orderAmount * this.value) / 100;
  }
}
