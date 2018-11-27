import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router'
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    items: Array<any>;

    constructor(public db: AngularFireDatabase, public _appService: AppService, public router: Router) { }

    ngOnInit() {
        this.getInfo();
    }

    getInfo() {
        this._appService.getInfo().subscribe(response => {
            var dataResponse;
            dataResponse = response;
            this.items = dataResponse;
        }, error => {
            console.log(error);
        })
    }

    verMas(index: number){
        sessionStorage.setItem('Producto', JSON.stringify(this.items[index]));
        this.router.navigate(['visualProduct']);
    }

}
