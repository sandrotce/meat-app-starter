import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {RestaurantsService} from '../restaurants/restaurantService'
import {Restaurant} from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  constructor(private restaurantservice: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantservice.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
