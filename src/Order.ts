import type { DiscountInterface } from "./DiscountInterface";

export class Order {
  constructor(
    private amount: number,
    private discount: DiscountInterface | null = null,
  ) {}

  public setDiscount(discount: DiscountInterface): void {
    this.discount = discount;
  }

  public getAmount(): number {
    if (this.discount !== null) {
      this.amount = this.discount.apply(this.amount);
    }

    return this.amount;
  }
}
