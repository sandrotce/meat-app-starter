import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates : number[] = [1,2,3,4,5]

  rate : number = 0
  priviousRate : number

  constructor() { }

  ngOnInit() {
  }

  setRates(r : number) {
    this.rate = r
    this.priviousRate = undefined
    this.rated.emit(this.rate)
  }

  SetTRate(r:number){
    if (this.priviousRate === undefined)
    {
      this.priviousRate = this.rate
    }
    this.rate = r
  }
  
  SetClear() {
    if (this.priviousRate != undefined)
    {
      this.rate = this.priviousRate
      this.priviousRate = undefined
    }
  }

}
