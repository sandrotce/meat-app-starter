//indo para usar o http.get com json
import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch' // aula 44 erros
//FIM
import {ErrorHandler} from '../app.error.handler' // Aula 44

import {Restaurant} from './restaurant/restaurant.model'

import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api' // ../ vai para nivel acima na estrutura de diretorio

@Injectable() // é com http texto2

export class RestaurantsService {
    //texto1
    /*rests : Restaurant[] =[
                          {
                            id: "bread2-bakery",
                            name: "Bread & Bakery",
                            category: "Bakery",
                            deliveryEstimate: "25m",
                            rating: 4.9,
                            imagPath: "./assets/img/restaurants/breadbakery.png"
                          },
                          {
                            id: "burger-house",
                            name: "Burger House",
                            category: "Hamburgers",
                            deliveryEstimate: "100m",
                            rating: 3.5,
                            imagPath: "assets/img/restaurants/burgerhouse.png"
                          }
    ]*/
    //Fim texto1
    constructor( private http : HttpClient){}

    Restaurants(search?:string): Observable<Restaurant[]> {
     //Restaurants(): Restaurant[] {
      //return this.rests; //esta versão e para pegar o array fixo, texto1
      //return this.http.get(`${MEAT_API}/rest/frest/?cOp=rest&cId=''`)
      let params : HttpParams = undefined
      if (search) {
        params = new HttpParams().append('q',search)
      }
      return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
    }

    restaurantById(id: string): Observable<Restaurant> {
      //console.log('Este é o id passado:' + id)
      //console.log('url:' + `${MEAT_API}/rest/frest/?cOp=resta&cId=${id}`)
      //return this.http.get(`${MEAT_API}/rest/frest/?cOp=resta&cId=${id}`)
      return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
      //httpclient não precisa de:.map(response=> response.json())
      //httpclient não precisa de:.catch(ErrorHandler.handeError)
    }

    reviewsOfRestaurant(id:string) : Observable<any>{
      console.log('Este é o id passado reviewsOfRestaurant:' + id)
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    menuOfRestaurant(id:string) : Observable<MenuItem[]>{
      //console.log('Este é o id passado reviewsOfRestaurant:' + id)
      return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
      // httpclient não precisa de:        .map(response=> response.json())
      // httpclient não precisa de:        .catch(ErrorHandler.handeError)
    }
}
