import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router' // 120 - to - navegar de volta ao pedido, este é para permitir fazer na fechamento do pedido se não logado, ir para login e depois voltar no pedido
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
  navigateTo : string

  constructor(private fb:FormBuilder,
             private loginservice: LoginService,
             private activatedroute : ActivatedRoute,
             private router : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email    : this.fb.control('', [Validators.required]),
      password : this.fb.control('', [Validators.required])
    }
   )
   this.navigateTo = this.activatedroute.snapshot.params['to'] || btoa('/')  // passo 3 - 120 - to - navegar de volta ao pedido,  pega a rota que veio ao clicar em Concluir Pedido, /order/ e colocar em  navigateTo
   console.log( 'ngOnInit LoginCompoente: ' + this.activatedroute.snapshot.params['to']) // este pega da rota do Login/:to o parametro to vem com /order, pois foi passado
  }
  // depois de login, alteramos a pagina de order, para passar o token na confirmação do pedido.
  login() {
      this.loginservice.login(this.loginForm.value.email,
                              this.loginForm.value.password)
                        .subscribe(user =>
                                      console.log(user.name),//this.notificationService.notify(`Bem vindo, ${user.name}`)
                                     response => // HttpErrorResponse, este response já contém a resposta de erro do servidor se for o caso
                                      console.log(response.error.message),  //this.notificationService.notify(response.error.message)) // serviço para notificar o usuário que o login foi feito
                                      ()=>{ // este terceiro parametro de .subscribe é justamente quem vc pode usar para colcar uma junção que irá chamar por ultimo após tudo concluido
                                        this.router.navigate([atob(this.navigateTo)]) // passo 4 - 120 - to - navegar de volta ao pedido, após concluir o login volta para rota CONCLUIR PEDIDO
                                      }
                                    )
      }

}
