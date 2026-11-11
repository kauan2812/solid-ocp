import type { DiscountInterface } from "./DiscountInterface";

export class FixedDiscount implements DiscountInterface {
  constructor(private readonly value: number) {}

  public apply(orderAmount: number): number {
    if (this.value >= orderAmount) {
      throw new Error("Desconto não pode ser maior que o valor do pedido");
    }

    return orderAmount - this.value;
  }
}
