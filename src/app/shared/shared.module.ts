//Basicamente aqui no modulos temos o que ele importa e exporta.
import { NgModule, ModuleWithProviders } from '@angular/core'
import {CommonModule} from '@angular/common' // Modulos que tem as diretivas basica, a gente não importou n o modulo raiz, pois ele já e importado automaticamente

import {FormsModule, ReactiveFormsModule} from '@angular/forms' // nosso componente de imput utiliza tanto o ngModel quanto formControlName, e tem as diretivas basicas, o
                          // input html usa uma séria de diretivas como o *ngIf, *ngFor
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component'

import { OrderService} from '../order/order.service';
import { ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService} from '../restaurants/restaurantService';
//import {SanackbarComponent} from
import {LoginService} from '../security/login/login.service'

import {LoggedInGuard} from '../security/loggedin.guard'
import {LeaveOrderGuard} from '../order/leave-order.guard'

@NgModule ({
  declarations : [InputComponent, RadioComponent, RatingComponent],
  imports : [CommonModule,FormsModule,ReactiveFormsModule], // a gente importa este modulos para usar na aplicação.
  exports : [InputComponent, RadioComponent,
             RatingComponent,CommonModule,
             FormsModule,ReactiveFormsModule] // que serão usados por outros componentes
})
export class SharedModule {
  static forRoot2() : ModuleWithProviders {
    return {
      ngModule : SharedModule,
      providers: [RestaurantsService,
                  ShoppingCartService,
                  OrderService,
                  LoginService,
                  LoggedInGuard,
                  LeaveOrderGuard]
    }
  }
}
