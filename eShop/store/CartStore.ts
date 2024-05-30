import {makeAutoObservable} from "mobx";

class CartStore {

  cart = new Set<string>();

  cartAmount = new Map();

  constructor() {
    makeAutoObservable(this)
  }

  addToCart(id: string) {
    this.cart.add(id)
    this.cartAmount.set(id, 1)
  }

  removeFromCart(id: string) {
    this.cart.delete(id)
    this.cartAmount.delete(id)
  }

  addAmount(id: string) {
    this.cartAmount.set(id, this.cartAmount.get(id) + 1)
  }

  removeAmount(id: string) {
    this.cartAmount.set(id, this.cartAmount.get(id) - 1)
  }
}

export default new CartStore()