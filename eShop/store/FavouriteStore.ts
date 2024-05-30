import { makeAutoObservable } from "mobx";

class FavouriteStore {
  favourite = new Set<string>();

  constructor() {
    makeAutoObservable(this)
  }

  addToFavourite(id: string) {
    this.favourite.add(id)
  }

  removeFromFavourite(id: string) {
    this.favourite.delete(id)
  }
}

export default new FavouriteStore()