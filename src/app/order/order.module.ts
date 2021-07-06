import {NgModule} from '@angular/core'
import {RouterModule, Routes, Router} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {OrderComponent} from './Order.Component'
import {OrderItemsComponent} from './order-items/order-items.component'
import {DeliveryCostComponent} from './delivery-cost/delivery-cost.component'
import {LeaveOrderGuard} from './leave-order.guard'

const ROUTES : Routes = [
  {path: '', component : OrderComponent, canDeactivate : [LeaveOrderGuard]}
]

@NgModule ({
  declarations : [OrderComponent,OrderItemsComponent,DeliveryCostComponent],
  imports : [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {}
