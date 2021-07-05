import {CanLoad, Route} from '@angular/router'
import {Injectable} from '@angular/core'

import {LoginService} from './login/login.service'

@Injectable()

export class LoggedInGuard implements CanLoad {

  constructor(private loginService : LoginService){}

  canLoad(route : Route) : boolean {

    let loggedIn = this.loginService.isLoggedIn()

    if (!loggedIn)
       this.loginService.handleLogin()
    else{
      return loggedIn
    }

    //console.log(route)

  }

}
