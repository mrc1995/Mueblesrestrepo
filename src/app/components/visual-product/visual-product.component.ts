import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-product',
  templateUrl: './visual-product.component.html',
  styleUrls: ['./visual-product.component.css']
})
export class VisualProductComponent implements OnInit {
  product: any;
  constructor() { }

  ngOnInit() {
    this.product = JSON.parse(sessionStorage.getItem('Producto'));
    console.log(this.product);
  }

}
