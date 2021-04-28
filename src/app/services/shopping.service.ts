import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ShoppingItem } from '../store/models/shopping-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) {}

  getShoppingItems() {
    console.log('hola');
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL).pipe(delay(500));
  }
  addShoppingItems(shoppingItem: ShoppingItem) {
    return this.http
      .post<ShoppingItem>(this.SHOPPING_URL, shoppingItem)
      .pipe(delay(500));
  }
  deleteShoppingItems(id: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).pipe(delay(500));
  }
}
