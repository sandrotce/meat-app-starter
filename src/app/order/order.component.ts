import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model'
import {OrderService } from './order.service'
import {CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem } from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery : number = 8

  paymentOptions : RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REG'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  totalOrder():number {
    return this.orderService.Total()
  }
  CartItems():CartItem[]{
    return this.orderService.CartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }
  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }
  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  CheckOrder(order:Order){
    order.OderItems = this.CartItems()
      .map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id) )

      this.orderService.checkOrder(order)
      .subscribe( (orderId: string) =>{
      console.log(`Compra concluida: ${orderId}`)

      this.orderService.clear()
    })
    console.log(order)
  }
}
