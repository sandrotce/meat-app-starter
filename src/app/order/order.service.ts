import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order,OrderItem} from './order.model'
import {MEAT_API} from '../app.api'
import {LoginService} from '../security/login/login.service'

@Injectable()

export  class OrderService{

  constructor(private cartService : ShoppingCartService,
              private http: HttpClient,
              private loginservice : LoginService) {}

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

    let headers = new HttpHeaders()

    //if (this.loginservice.isLoggedIn()){ // isso saiu daqui porque colocamos no Interceptor, para ficar em um unico lugar e adicionar o token a todas as requizições http
    //    headers = headers.set('Authorization', `Bearer ${this.loginservice.user.accesstoken}`)
    //}
    return this.http.post<Order>(`${MEAT_API}/orders/`,order, {headers : headers}) // {headers : headers} isto em chaves são propriedades do método post.
                          .map(order =>order.id)
  }

}
