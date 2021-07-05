import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'

import {OrderComponent} from './Order.Component'
import {OrderItemsComponent} from './order-items/order-items.component'
import {DeliveryCostComponent} from './delivery-cost/delivery-cost.component'

const ROUTES : Routes = [
  {path: '', component : OrderComponent}
]

@NgModule ({
  declarations : [OrderComponent,OrderItemsComponent,DeliveryCostComponent],
  imports : [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule {}
