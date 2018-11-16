import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { toUnicode } from 'punycode';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    items: AngularFireList<any[]>;
    itemValue = "";
    constructor(public afdb: AngularFireDatabase) { }

    getInfo() {
        return this.afdb.list('Personas').valueChanges();
    }

    addPerson(value){
        this.afdb.list('/Personas').push({persona: value});
    }

    updatePerson(item, value){
        this.afdb.object('/Personas/'+ item.key).update({persona: value});
    }

    deletePerson(item){
        return this.afdb.list('/Personas/' + item.key).remove();
    }
}
