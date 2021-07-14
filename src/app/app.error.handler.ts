//Esta classe e da aula 44

import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core'
import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

import {NotificationService} from './shared/messages/notification.service'
import {LoginService} from './security/login/login.service'

@Injectable() // todo provider que recebe uma injeção tem de ser um Injectable
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(private ns:NotificationService,
              private zone : NgZone,
             private injector:Injector){
    super()
  }
  handeError(errorResponse: HttpErrorResponse | any){

     if (errorResponse instanceof HttpErrorResponse){
       const message = errorResponse.error.message
       this.zone.run(()=>{
         switch(errorResponse.status){
           case 401 :
              this.injector.get(LoginService).handleLogin()
            break;
           case 403 :
              this.ns.notify(message || 'Não autorizado')
            break;
           case 404 :
              this.ns.notify(message || 'Recurso não encontrado, Verifique o console para mais detalhes')
            break;
         }
       
       })
     }
     super.handleError(errorResponse)
  }
}
