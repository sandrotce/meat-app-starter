import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
//import { RestaurantsService} from './restaurants/restaurantService';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'

//import { ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
//import { InputComponent } from './shared/input/input.component'; // este foram colocados no shared.module, aula 77
//import { RadioComponent } from './shared/radio/radio.component';// este foram colocados no shared.module, aula 77
import { OrderItemsComponent } from './order/order-items/order-items.component'
//import { OrderService} from './order/order.service';
import { DeliveryCostComponent } from './order/delivery-cost/delivery-cost.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
//import { RatingComponent } from './shared/rating/rating.component'// este foram colocados no shared.module, aula 77
import {SharedModule} from './shared/shared.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
//import { NotFoundComponent} from './not-found/not-found.component';
//import {OrderModule} from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
    NotFoundPageComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostComponent
  ],
  //não preciso mais importar aqui o FormsModule,ReactiveFormsModule, pois estão sendo importados no sharedModule
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot2(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide:LOCALE_ID, useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
