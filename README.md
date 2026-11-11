# SOLID — OCP (Open/Closed Principle)

Estudo prático do **O** do SOLID: o **Princípio Aberto/Fechado**.

> "Entidades de software devem estar abertas para extensão, mas fechadas para modificação." — Bertrand Meyer

## O problema

Imagine um `Order` que calcula descontos com um `if/else` ou `switch` por tipo (`"fixed"`, `"percentage"`, ...). Toda vez que surgir um novo tipo de desconto, a classe `Order` precisa ser alterada — e cada alteração pode quebrar o que já funcionava.

## A solução

O comportamento de desconto foi abstraído em uma interface. O `Order` depende apenas dela, sem saber qual desconto concreto está sendo aplicado:

```ts
export interface DiscountInterface {
  apply(orderAmount: number): number;
}
```

| Classe | Papel |
| --- | --- |
| `DiscountInterface` | Contrato que todo desconto deve seguir |
| `FixedDiscount` | Desconto de valor fixo (ex.: R$ 20) |
| `PercentageDiscount` | Desconto percentual (ex.: 20%) |
| `Order` | Recebe qualquer `DiscountInterface` e aplica ao valor |

Para criar um novo tipo de desconto (ex.: Black Friday, cupom de primeira compra), basta **criar uma nova classe** que implemente `DiscountInterface` — o `Order` não precisa ser modificado.

```ts
const order1 = new Order(200);
order1.setDiscount(new FixedDiscount(20));
console.log(order1.getAmount()); // 180

const order2 = new Order(200);
order2.setDiscount(new PercentageDiscount(20));
console.log(order2.getAmount()); // 160
```

## Estrutura

```
ocp/
├── index.ts                  # Exemplo de uso com os dois descontos
└── src/
    ├── DiscountInterface.ts
    ├── FixedDiscount.ts
    ├── PercentageDiscount.ts
    └── Order.ts
```

## Como rodar

Requer [Bun](https://bun.com).

```bash
bun install
bun run index.ts
```

## Série SOLID

- **S** — [Single Responsibility Principle](https://github.com/kauan2812/solid-srp)
- **O** — [Open/Closed Principle](https://github.com/kauan2812/solid-ocp) (este repo)
