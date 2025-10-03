import { CanDeactivateFn } from '@angular/router';
import { Cart } from './cart/cart';

// WHere will the guard called? <Cart>
export const checkoutGuard: CanDeactivateFn<Cart> = (component, currentRoute, currentState, nextState) => {
  
  const confirmation = confirm('You have item pendings in your cart, are you sure to leave?')
  // true -> can leave, false - stay in page
  return confirmation;
};
