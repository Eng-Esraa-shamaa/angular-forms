import { Component, OnInit } from '@angular/core';
import { countries } from './countries.interface';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
countries:countries[]=[
  {name:'Egypt'},
  {name:'london'},
  {name:'paris'},
  {name:'italy'}
]
  constructor() { }
 log(x:any){
   console.log(x)
 }
 onSubmit(contactForm:any){
console.log(contactForm)
console.log(contactForm.value)
contactForm.reset()
 }

  ngOnInit(): void {
  }

}
