//indo para usar o http.get com json

//FIM
import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantsService} from './restaurantService'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restshttp : Restaurant[]

  constructor(private restaurantservice : RestaurantsService) { }

  ngOnInit() {
    //voce esta pegando o resultado de this.restaurantservice.Restaurants() e jogando dentro da propriedade restshttp
    //this.restshttp = this.restaurantservice.Restaurants() // texto1 com array fixo para retornar os restaurants
    this.restaurantservice.Restaurants()
    .subscribe(restaurants => this.restshttp = restaurants)
  }

}
