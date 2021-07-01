import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
//import {OrderComponent} from './order/order.component'
import {OrderSumaryComponent} from './order-sumary/order-sumary.component'
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children:[
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu',component: MenuComponent},
      {path: 'reviews',component: ReviewsComponent}
    ]},
  {path: 'order-sumary', component: OrderSumaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}, // quando necessitamos de criar as dependencias apenas
  //quando formos usar uma paginas para não sobrecarregar a inicialização da pagina "Lazy-Loading", poderá ser feita em
  //um momento posterior, se diferentes usuários não acessam todas as paginas, podemos com modulos dividir a inicializaçãoptimize
  //da aplicação em partes.
  //{path: 'order', loadChildren: './order/Order.module#OrderModule'},
//  {path: 'order', loadChildren: './order/Order.module#OrderModule'},
  {path: '**', component: NotFoundPageComponent} // tem que ficar no final das rotas.
]
