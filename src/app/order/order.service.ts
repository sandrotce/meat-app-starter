import {Injectable} from '@angular/core'
import {Http, Headers, RequestOptions} from "@angular/http"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order,OrderItem} from './order.model'
import {MEAT_API} from '../app.api'

@Injectable()

export  class OrderService{

  constructor(private cartService : ShoppingCartService, private http: Http) {}

  CartItems() : CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    return this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    return this.cartService.decreaseQty(item)
  }

  remove(item:CartItem){
    this.cartService.removeItem(item)
  }

  Total(){
    return this.cartService.Total()
  }
  clear(){
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string> { 
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    console.log('stringfy: ' + JSON.stringify(order))
    //return JSON.stringify(order)
    return this.http.post(`${MEAT_API}/orders/`,
                          JSON.stringify(order),
                          new RequestOptions({headers:headers}))
                          .map(response=> response.json())
                          .map(order => order.id)
  }

}
