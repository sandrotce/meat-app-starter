import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 72 - ReactiveForms
import {FormGroup, FormBuilder,Validators, AbstractControl} from '@angular/forms'

import {RadioOption} from '../shared/radio/radio-option.model'
import {OrderService } from './order.service'
import {CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem } from './order.model'

import 'rxjs/add/operator/do'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailParttern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberParttren = /^[0-9]*$/

  orderForm : FormGroup // 72 - ReactiveForms
  delivery : number = 8
  orderId  : string

  paymentOptions : RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão Refeição', value:'REG'}
  ]

  constructor(private orderService: OrderService,
              private router : Router,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name :  this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email : this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailParttern)]),
      emailConfirmation : this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailParttern)]),
      address :  this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number : this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberParttren)]),
      optionalAddress : this.formBuilder.control(''),
      paymentOption : this.formBuilder.control('', [Validators.required])
    }, {validator : OrderComponent.equalsTo})
  }
  static equalsTo(group: AbstractControl) : {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation){
      return undefined
    }
    if (email.value !== emailConfirmation.value){
      return {emailNotValid:true}
    }
    return undefined
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

  isOrderCompleted(){
    return this.orderId !== undefined
  }
  CheckOrder(order:Order){

    order.OderItems = this.CartItems()
      .map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id) )

      this.orderService.checkOrder(order)
      .do( (orderId: string) =>{
        console.log("checkorder 85 : " + orderId)
        this.orderId = orderId
          })
      .subscribe(  (orderId: string) =>
                  {
                      this.router.navigate(['/order-sumary'])
                      console.log(`Compra concluida: ${orderId}`)
                      this.orderService.clear()
                  })

  }
}
