import { Observable } from 'rxjs';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products :any[] =[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res:any)=>{
      this.products=res;
        });
    
  }



}
