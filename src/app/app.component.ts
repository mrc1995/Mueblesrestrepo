import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Anf,FirebaseListObservable } from 'angularfire2';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppService } from './services/app.service';
import { Persona } from '../app/utils/person';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
