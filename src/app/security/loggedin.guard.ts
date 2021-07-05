import {CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import {Injectable} from '@angular/core'

import {LoginService} from './login/login.service'

@Injectable()

export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService : LoginService){}


 checkAuthentication (path : string) : boolean {
         let loggedIn = this.loginService.isLoggedIn()

         if (!loggedIn)
         {
            console.log('Patch anterior: ' + `${path}`)
            this.loginService.handleLogin(`/${path}`) // passo: 1 - 120 - to - navegar de volta ao pedido, aqui pegamos a rota que estava quando não conseguiu logar
         }else{
           return loggedIn
         }

  }

  canLoad(route : Route) : boolean {
         console.log('canLoad')
         return this.checkAuthentication(route.path)
  }
                                                      // RouterStateSnapshot : TEM TODAS AS ROTAS ATÉ CHEGAR AQUI
  canActivate(activatedRoute : ActivatedRouteSnapshot, routerState : RouterStateSnapshot): boolean {
         console.log('canActivate')
         return this.checkAuthentication(activatedRoute.routeConfig.path)
  }

}
