import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { countries } from '../templateform/countries.interface';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  countries:countries[]=[
    {name:'Egypt'},
    {name:'london'},
    {name:'paris'},
    {name:'italy'}
  ]
  constructor( private fb:FormBuilder   ) { }
  contactForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    gender:['',[Validators.required]],
    country:['',[Validators.required]],
    isMarried:['']

  })

  get myValues(){
    return this.contactForm.controls
  }
  log(){
    console.log(this.contactForm.controls)
  }
  onSubmit(contactForm:any){
  
    console.log(contactForm.value)
   
    
     }
  ngOnInit(): void {
  }

}
