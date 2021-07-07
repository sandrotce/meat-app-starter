import {Injectable,Injector} from '@angular/core'
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {LoginService} from './login/login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{ // fase 1 - AuthInterceptor

    //constructor(loginService : LoginService) {} // isso não funciona aqui, IMPORTANTE @Injectable() -- Serve para injetar o loginService ou um serviço naquele outro serviço, AuthInterceptor
    constructor(private injector : Injector) {} // Injector : é um referencia ao mecanismo de injeção de dependencia do Angular, atraves do Injector, vc pode acessar qualquer, tem um método Get e te dara a instancia e depencias de instancia.

    intercept(request : HttpRequest<any>,  next : HttpHandler) : Observable<HttpEvent<any>> {
      console.log('Intercepting' , request)
      const loginService = this.injector.get(LoginService)
      if (loginService.isLoggedIn()){
        const authRequest = request.clone({setHeaders: {'Authorization' :`Bearer ${loginService.user.accesstoken}` } })
        return next.handle(authRequest)
      }else{
        return next.handle(request)
      }
    }
}
