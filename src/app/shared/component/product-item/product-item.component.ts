import { ProductService } from './../../services/product.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : any;

  //@Output() onClickCount = new EventEmitter();


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  ondelete(id:number){
    this.productService.deleteProduct(id);
  }


}
