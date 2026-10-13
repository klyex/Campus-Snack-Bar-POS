---
name: error-handling
description: Guide validation, debugging, and user-facing error handling for the IT415 Campus Snack Bar POS.
---

# Error Handling

Use this skill when adding validation, fixing bugs, or reviewing failure cases in the Campus Snack Bar POS.

## Error Handling Goal

Prevent invalid transactions while keeping messages simple enough for a cashier and clear enough for exam screenshots.

## Required Payment Validation

The payment flow must reject:

- Blank payment input.
- Non-numeric payment input.
- Negative payment amount.
- Insufficient payment amount.

Use clear on-screen messages. A valid payment must be numeric, non-negative, and greater than or equal to the current total.

## Suggested Messages

Use messages like these, adjusted to the actual total:

- "Please enter a valid payment amount."
- "Insufficient payment. Please enter at least PHP 90.00."
- "Payment successful. Change: PHP 10.00."

Keep messages near the payment input or confirmation area.

## Cart Error Cases

Handle cart state carefully:

- Do not allow checkout with an empty cart.
- Do not allow quantity to fall below one for a visible cart row.
- If quantity reaches zero through a decrease action, remove the item cleanly.
- After removing an item, recompute subtotals and total immediately.
- Clear old payment and receipt state when the cart changes after a completed transaction.

## Debugging Guidance

When debugging:

- Reproduce the issue with a specific cart and payment value.
- Check whether cart state, displayed subtotal, displayed total, and receipt total match.
- Test one invalid payment case at a time.
- Preserve working behavior while fixing a narrow failure.
- Keep any AI-assisted debugging record honest: include the prompt, purpose, response summary, evaluation, and modifications made.

## Final Validation Checklist

Before calling error handling complete, manually test:

- Empty cart checkout.
- Blank payment.
- Letters or symbols in payment.
- Negative payment.
- Payment below total.
- Payment exactly equal to total.
- Payment above total.
- Quantity increase and decrease.
- Product removal.
- New transaction reset after a successful receipt.
