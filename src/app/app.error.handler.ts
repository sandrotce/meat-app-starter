//Esta classe e da aula 44

import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

export class ErrorHandler{
  static handeError(error: HttpErrorResponse | any){
      let errormessage : string

      if (error instanceof HttpErrorResponse){
        const body = error.error
        errormessage = `Erro ${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        //errormessage = error.toString()
      }else {
        errormessage = error.message ? error.message : error.toString()
      }
      console.log(errormessage)
      return Observable.throw(errormessage)
  }
}
