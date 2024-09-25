import { Routes } from '@angular/router';
import { CreateComponent } from './components/post/create/create.component';
import { EditComponent } from './components/post/edit/edit.component';

export const routes: Routes = [
    { path: 'post', children: [
        { path: 'create', component: CreateComponent },
        { path: 'edit/:id', component: EditComponent }
    ]}
];
