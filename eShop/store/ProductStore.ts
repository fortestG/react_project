import { makeAutoObservable } from "mobx";
import { ProductApi } from "../types";


class ProductStore {
  products: ProductApi[] = [
    {
      "createdAt": "2022-12-11T13:25:01.212Z",
      "title": "Practical Plastic Chair",
      "avatar": "https://loremflickr.com/640/480/food",
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "price": "441.00",
      "article": "01d6fa17-526c-4767-8165-19427b77464e",
      "amount": 71,
      "id": "1"
    },
    {
      "createdAt": "2022-12-11T14:07:51.866Z",
      "title": "Generic Frozen Cheese",
      "avatar": "https://loremflickr.com/640/480/food",
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "price": "704.00",
      "article": "254565bd-7cb0-40fe-9fcd-4c93e3f9912c",
      "amount": 11,
      "id": "2"
    },
    {
      "createdAt": "2022-12-10T23:33:32.041Z",
      "title": "Recycled Wooden Cheese",
      "avatar": "https://loremflickr.com/640/480/food",
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "price": "746.00",
      "article": "d76a0d3f-b821-428c-a1fa-002a5a629cd7",
      "amount": 21,
      "id": "3"
    },
    {
      "createdAt": "2022-12-10T17:15:16.995Z",
      "title": "Luxurious Fresh Chips",
      "avatar": "https://loremflickr.com/640/480/food",
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "price": "122.00",
      "article": "1e1b426e-c98c-451a-b1c6-a599e847331f",
      "amount": 32,
      "id": "4"
    }
  ]

  constructor() {
    makeAutoObservable(this)
  }
}

export default new ProductStore()