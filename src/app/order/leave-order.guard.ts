
import {CanDeactivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {Injectable} from '@angular/core'

import {OrderComponent} from './order.component'

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent : OrderComponent,
                 activatedroute: ActivatedRouteSnapshot,
                 routerState : RouterStateSnapshot): boolean {

      if (!orderComponent.isOrderCompleted()){
          return window.confirm("Deseja desistir da compra?")
      }else{
        return true
      }
  }
}
