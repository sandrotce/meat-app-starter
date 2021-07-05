import {CanLoad, Route} from '@angular/router'
import {Injectable} from '@angular/core'

@Injectable()

export class LoggedInGuard implements CanLoad {


  canLoad(route : Route) : boolean {
    console.log(route)
    return false
  }

}
