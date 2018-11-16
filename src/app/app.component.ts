import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Anf,FirebaseListObservable } from 'angularfire2';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Persona } from '../app/utils/person';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'unit-test';
    itemValue = '';
    items: Array<Persona>;
    persona: Persona = new Persona();
    enableButtonMod: boolean = false;
    sendPerson: any;

    constructor(public db: AngularFireDatabase, public _appService: AppService) {
    }

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
    /*
        addTodo(value: string): void {
            this.items.push({ content: value });
        }*/
}
