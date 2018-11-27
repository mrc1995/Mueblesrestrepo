import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { routing, appRoutingProviders  } from './app.routing';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NusersComponent } from './components/nusers/nusers.component';
import { ProductsComponent } from './components/products/products.component';
import { VisualProductComponent } from './components/visual-product/visual-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NusersComponent,
    ProductsComponent,
    VisualProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    NgxQRCodeModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
