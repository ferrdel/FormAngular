import { Routes } from '@angular/router';
import { CreateComponent } from './components/post/create/create.component';
import { EditComponent } from './components/post/edit/edit.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: "product", component : ProductComponent },
    { path: 'post', children: [
        { path: 'create', component: CreateComponent },
        { path: 'edit/:id', component: EditComponent }
    ]}
];
