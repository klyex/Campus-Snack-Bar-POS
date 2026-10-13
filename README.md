# Campus Snack Bar POS

A simple desktop-friendly point-of-sale system for the IT415 practical exam. The assigned scenario is a campus snack bar that sells burgers, sandwiches, fries, nachos, and canned soda.

## Milestone Plan

1. Setup and interface
   - Create the basic HTML, CSS, and JavaScript files.
   - Display the required snack bar products with prices.
   - Arrange the product list, cart summary, payment area, and receipt preview.
2. Ordering and calculations
   - Add products to the cart.
   - Increase, decrease, and remove cart items.
   - Recompute item subtotals and the overall total automatically.
3. Validation and final improvements
   - Validate cash payment input.
   - Compute change and show payment confirmation.
   - Generate a digital receipt and support a new transaction reset.

## Product List

| Product | Price |
| --- | ---: |
| Classic Burger | ₱55.00 |
| Cheeseburger | ₱65.00 |
| Ham Sandwich | ₱40.00 |
| French Fries (Regular) | ₱45.00 |
| Nachos | ₱50.00 |
| Soda (Can) | ₱25.00 |

## Setup Instructions

Open `index.html` in a web browser. No installation, database, login, payment gateway, or deployment setup is required.

## Current Manual Test - Milestone 3

1. Open `index.html`.
2. Confirm the page title shows Campus Snack Bar POS.
3. Confirm all six required products and prices are visible.
4. Confirm each product has a visible Add to Cart button.
5. Add Cheeseburger and Soda (Can) to the cart.
6. Confirm the cart shows each item name, quantity, unit price, subtotal, and total.
7. Increase Cheeseburger quantity and confirm the subtotal and total update.
8. Decrease Cheeseburger quantity and confirm the quantity never becomes zero or negative.
9. Remove Soda (Can) and confirm the total updates.
10. Add Soda (Can) again so the total is ₱90.00.
11. Try blank, negative, and insufficient payment values and confirm clear error messages appear.
12. Enter `100` as the cash payment and confirm the change is ₱10.00.
13. Confirm the receipt shows item names, quantities, subtotals, total, cash received, change, and transaction reference.
14. Click New Transaction and confirm the cart, payment input, messages, and receipt are cleared.

