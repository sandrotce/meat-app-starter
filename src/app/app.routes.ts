import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
//import {OrderComponent} from './order/order.component'
import {OrderModule} from './order/order.module'
import {OrderSumaryComponent} from './order-sumary/order-sumary.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {LoginComponent} from './security/login/login.component'

import {LoggedInGuard} from './security/loggedin.guard'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children:[
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu',component: MenuComponent},
      {path: 'reviews',component: ReviewsComponent}
    ]},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order-sumary', component: OrderSumaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}, // quando necessitamos de criar as dependencias apenas
  //quando formos usar uma paginas para não sobrecarregar a inicialização da pagina "Lazy-Loading", poderá ser feita em
  //um momento posterior, se diferentes usuários não acessam todas as paginas, podemos com modulos dividir a inicializaçãoptimize
  //da aplicação em partes.
  {path: 'order', loadChildren: './order/Order.module#OrderModule',
    canLoad: [LoggedInGuard]}, // se não estiver logado não deixa criar o módulo de OrderModule
  {path: '**', component: NotFoundPageComponent} // tem que ficar no final das rotas.
]
