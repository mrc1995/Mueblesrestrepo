import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AppService } from '../../services/app.service';
import { TransformToBase } from '../../services/tranformtoBase.service';
import { Persona } from '../../utils/person';
@Component({
  selector: 'app-nusers',
  templateUrl: './nusers.component.html',
  styleUrls: ['./nusers.component.css']
})
export class NusersComponent implements OnInit {

  title = 'unit-test';
    itemValue = '';
    items: Array<any>;
    persona: Persona = new Persona();
    enableButtonMod: boolean = false;
    sendPerson: any;

    constructor(
        public db: AngularFireDatabase, 
        public _appService: AppService,
        public _transformBase: TransformToBase
        ) {}

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

    onSubmit() {
        console.log(this.persona);
        this._appService.addPerson(this.persona);
        this.persona = new Persona();
    }

    updatePerson(index: number) {
        this.persona = this.items[index].persona;
        this.enableButtonMod = true;
        this.db.list('Personas').snapshotChanges().subscribe(
            response => {
                var dataResponse;
                dataResponse = response;
                this.sendPerson = dataResponse[index];
            });
    }

    modifPersona() {
        this._appService.updatePerson(this.sendPerson, this.persona);
        this.enableButtonMod = false;
        this.persona = new Persona();
    }

    removePerson(value) {
        this.db.list('Personas').snapshotChanges().subscribe(
            response => {
                var dataResponse;
                dataResponse = response;
                this._appService.deletePerson(dataResponse[value]);
            });
    }

    onChange(files){
        console.log(files);
        this.persona.imagen = this._transformBase.transformToBase64Promise(files.item(0)).then(
            data =>{
                this.persona.imagen = data;
            }, error => {
                console.log(error);
            }
        )
    }

}
