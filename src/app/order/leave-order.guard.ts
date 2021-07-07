
import {CanDeactivate, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {Injectable} from '@angular/core'

import {OrderComponent} from './order.component'

@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent : OrderComponent,  // passo 2 - canDeactivate se usuário sair da tela sem estar com o pedido concluido orderComponent.isOrderCompleted()
                 activatedroute: ActivatedRouteSnapshot, // dispara a mensagem abaixo
                 routerState : RouterStateSnapshot): boolean {

      if (!orderComponent.isOrderCompleted()){
          return window.confirm("Deseja desistir da compra?")
      }else{
        return true
      }
  }
}
