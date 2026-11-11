import { FixedDiscount } from "./src/FixedDiscount";
import { Order } from "./src/Order";
import { PercentageDiscount } from "./src/PercentageDiscount";

const order1 = new Order(200);
order1.setDiscount(new FixedDiscount(20));
console.log(order1.getAmount()); // 180

const order2 = new Order(200);
order2.setDiscount(new PercentageDiscount(20));
console.log(order2.getAmount()); // 160
