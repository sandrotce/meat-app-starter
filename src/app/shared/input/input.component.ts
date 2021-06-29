import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms'
// 72 - ReactiveForms adicionamos FormControlName
@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label : string
  @Input() errorMessage : string

  input2  : any

  @ContentChild(NgModel) model : NgModel
  @ContentChild(FormControlName) control: FormControlName // 72 - ReactiveForms adicionamos FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {    // 72 - ReactiveForms adicionamos FormControlName || this.control
    this.input2 = this.model || this.control
    if (this.input2 === undefined){
      throw new Error('Este componente precisa ser usado como uma diretiva ngModel ou FormControlName')
    }
  }
}
