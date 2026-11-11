export interface DiscountInterface {
  apply(orderAmount: number): number;
}
