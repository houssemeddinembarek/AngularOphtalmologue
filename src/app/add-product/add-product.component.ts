import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit ,  HostBinding } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import {trigger,state,style,animate,transition} from '@angular/animations';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  animations:[
    trigger('popOverState',[
      state('show', style({
        opacity:1
      })),
      state('hide' , style({
        opacity:0
      })),
      transition('show=> hide',animate('600ms ease-out')),
      transition('show=> hide',animate('1000ms ease-in'))
    ])
  ]
})

export class AddProductComponent implements OnInit {

  productForm! : FormGroup;


  constructor(private productService:ProductService , private form : FormBuilder , private router:Router) { }

  ngOnInit(): void {
    this.productForm = this.form.group(
      {
        'id': null,
        'name':[null,Validators.required],
        'description':[null,Validators.required],
        'image':[null,Validators.required],
        'price':[null,Validators.required],
        'category':[null,Validators.required],
      });
  }

  onSubmit(){
    console.log(this.productForm);
    this.addProduct();
    this.productForm.reset();
    this.router.navigateByUrl("/product");
}
  
addProduct(){
  this.productService.addProduct(this.productForm.value).subscribe(res=>
    {
      alert(res);
    }
  )
}




//animation
show = false;

get statename(){
  return this.show ? 'show' : 'hide'
}

toggle(){
  this.show = !this.show;
}

}
