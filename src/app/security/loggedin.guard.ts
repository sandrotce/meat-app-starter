import {CanLoad, Route} from '@angular/router'
import {Injectable} from '@angular/core'

import {LoginService} from './login/login.service'

@Injectable()

export class LoggedInGuard implements CanLoad {

  constructor(private loginService : LoginService){}

  canLoad(route : Route) : boolean {

    let loggedIn = this.loginService.isLoggedIn()

    if (!loggedIn)
    {
       console.log('Patch anterior: ' + `${route.path}`)
       this.loginService.handleLogin(`/${route.path}`) // passo: 1 - 120 - to - navegar de volta ao pedido, aqui pegamos a rota que estava quando não conseguiu logar
    }else{
      return loggedIn
    }

    //console.log(route)

  }

}
