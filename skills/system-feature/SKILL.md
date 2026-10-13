---
name: system-feature
description: Guide implementation of the required Campus Snack Bar POS features from the IT415 practical exam.
---

# System Feature

Use this skill when building, checking, or documenting the required POS features for the IT415 Campus Snack Bar POS.

## Required Transaction Flow

Implement only the assigned snack bar scenario unless the user explicitly asks for another scenario. The app must support this flow:

1. Browse products with names and prices.
2. Add one or more products to the cart.
3. Adjust quantities and remove cart items.
4. Review an order summary with item quantities, subtotals, and total.
5. Enter cash payment in a numeric input field.
6. Validate payment and compute change.
7. Confirm payment, show a receipt, and allow a new transaction.

## Required Product Catalog

Use at least the Scenario 4 snack bar products:

- Classic Burger - PHP 55.00
- Cheeseburger - PHP 65.00
- Ham Sandwich - PHP 40.00
- French Fries (Regular) - PHP 45.00
- Nachos - PHP 50.00
- Soda (Can) - PHP 25.00

Hard-coded products and prices are allowed. A database is not required.

## Feature Requirements

The application should:

- Display at least five priced products.
- Add products using on-screen buttons.
- Increase and decrease item quantities already in the cart.
- Remove products from the cart.
- Automatically recompute item subtotals and the total whenever the cart changes.
- Display a clear order summary of all current cart items.
- Accept cash payment through a numeric input.
- Reject invalid or insufficient payment with a clear message.
- Compute change as amount paid minus total amount.
- Display payment confirmation after successful payment.
- Generate a receipt with items, quantities, subtotals, total, amount paid, change, and transaction reference.
- Start a new transaction by clearing cart, payment amount, messages, confirmation, and receipt.

## Out-of-Scope Features

Avoid adding features not required by the exam unless the user asks:

- User login or roles.
- Inventory management.
- Database integration.
- Real payment gateway, QR payment, or card payment.
- Deployment workflow.
- Advanced Git flow such as branches or pull requests.

## Completion Checks

Use this sample transaction to verify the core calculation:

- Cheeseburger x 1 = PHP 65.00
- Soda (Can) x 1 = PHP 25.00
- Total = PHP 90.00
- Cash payment = PHP 100.00
- Change = PHP 10.00

Also test blank payment, non-numeric payment, negative payment, insufficient payment, item removal, quantity decrease, and new transaction reset.
