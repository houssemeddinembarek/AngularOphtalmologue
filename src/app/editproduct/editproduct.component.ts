import { Product } from './../shared/model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../shared/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id:any;
  updateForm! : FormGroup;
  product! :Product ;


  constructor(public productService:ProductService , private form:FormBuilder , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); 
    alert(this.id);

    this.updateForm = this.form.group({
      
        'id': null,
        'name':[null,Validators.required],
        'description':[null,Validators.required],
        'image':[null,Validators.required],
        'price':[null,Validators.required],
        'category':[null,Validators.required],

    });

    this.productService.getProduct(this.id).subscribe((res:Product)=>{
      
    this.product=res;

    console.log(res);
    console.log(this.product);


     })

  }


  update(){
   // this.productService.updateProduct()
  }

  onedit(id:number){
    this.productService.getProduct(id).subscribe(res=>{
      console.log("reussit");
      
    })
  }

}