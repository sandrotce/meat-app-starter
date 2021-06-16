import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label : string
  @Input() errorMessage : string

  input2  : any

  @ContentChild(NgModel) model : NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input2 = this.model
    if (this.input2 === undefined){
      throw new Error('Este componente precisa ser usado como uma diretiva ngModel')
    }
  }
}
