import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NusersComponent } from '../app/components/nusers/nusers.component';
import { ProductsComponent } from '../app/components/products/products.component';
import { VisualProductComponent } from '../app/components/visual-product/visual-product.component';


const appRoutes: Routes = [
    { path: '', component: NusersComponent},
    { path: 'users', component: NusersComponent, data: { state: 'users' } },
    { path: 'products', component: ProductsComponent, data: { state: 'products' } },
    { path: 'visualProduct', component: VisualProductComponent, data: { state: 'visualProduct' } },
]; 

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);