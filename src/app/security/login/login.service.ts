import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs/Observable'
import {Router} from '@angular/router'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import {MEAT_API} from '../../app.api'
import {User} from './user.model'

@Injectable()

export class LoginService{

  user : User

  constructor(private http: HttpClient, private router : Router){}

  isLoggedIn() : boolean {
    return this.user !== undefined
  }

  login(email:string, password:string): Observable<User>{
      console.log(email + ' - '  + password)
      return this.http.post<User>(`${MEAT_API}/login/`,
                       {email : email, password : password} )
                      .do(user => this.user = user) // desta forma com o do() conseguimos pegar o retorno do metodo post e gravar no this.user.
  }

  handleLogin(){

    this.router.navigate(['/login'])

  }

}
