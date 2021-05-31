//Esta classe e da aula 44

import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

export class ErrorHandler{
  static handeError(error: Response | any){
      let errormessage : string

      if (error instanceof Response){
        errormessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        //errormessage = error.toString()
      }else {
        errormessage = error.toString()
      }
      console.log(errormessage)
      return Observable.throw(errormessage)
  }
}
