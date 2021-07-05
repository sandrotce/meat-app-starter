import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import {HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {LoginService} from './login.service'
import {User} from './user.model'

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup // 72 - ReactiveForms

  constructor(private fb:FormBuilder, private loginservice: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email    : this.fb.control('', [Validators.required]),
      password : this.fb.control('', [Validators.required])
    })
  }
  // depois de login, alteramos a pagina de order, para passar o token na confirmação do pedido.
  login() {
      this.loginservice.login(this.loginForm.value.email,
                              this.loginForm.value.password)
                        .subscribe( user => console.log(user)) // tem que ser .subscribe() porque o metodo this.loginservice.login e um Observable.
                        //.subscribe(user =>
                        //             this.notificationService.notify(`Bem vindo, ${user.name}`)
                        //             response => // HttpErrorResponse, este response já contém a resposta de erro do servidor se for o caso
                        //                this.notificationService.notify(response.error.message)) // serviço para notificar o usuário que o login foi feito
      }

}
