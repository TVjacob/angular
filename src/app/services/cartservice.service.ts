import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];

  constructor() {}

  add(book: Book) {
    this.cart.push(book);
  }

  get() {
    return this.cart;
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b) => b != book);
  }
  findBy(book:Book){
    return this.cart.filter((b)=> b === book);
  }
  findById(id:number){
    return this.cart.filter((b)=> b.id === id)[0];
  }

}
