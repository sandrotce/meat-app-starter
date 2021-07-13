import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {ApplicationErrorHandler} from './app.error.handler'
import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'

import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import {SharedModule} from './shared/shared.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';

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
    LoginComponent,
    UserDetailComponent
  ],
  //não preciso mais importar aqui o FormsModule,ReactiveFormsModule, pois estão sendo importados no sharedModule
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot2(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy : PreloadAllModules})
  ],
  providers: [{provide:LOCALE_ID, useValue:'pt-BR'},
              {provide : ErrorHandler, useClass : ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
