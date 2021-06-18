import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items : CartItem[]

  @Output() increaseOrderitemQty = new EventEmitter<CartItem>()
  @Output() decreaseOrderitemQty = new EventEmitter<CartItem>()
  @Output() removeOrderitem = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseOrderitemQty.emit(item)
  }

  emitdecreaseQty(item: CartItem) {
    this.decreaseOrderitemQty.emit(item)
  }

  emitremove(item: CartItem) {
    this.removeOrderitem.emit(item)
  }

}
