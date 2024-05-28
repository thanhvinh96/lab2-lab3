import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './pages/user/user.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormComponent } from './form/form.component';
import { RformComponent } from './rform/rform.component';

export const routes: Routes = [
    { path:'',component:HomeComponent},
    { path:'form',component:FormComponent},
    { path:'rform',component:RformComponent},
    { path:'about',component:AboutComponent},
    { path:'user/:id',component:UserComponent},
    { path:'**',component:NotfoundComponent}
];
