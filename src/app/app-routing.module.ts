import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWeldpointComponent } from './add-weldpoint/add-weldpoint.component';
import { DeleteWeldpointComponent } from './delete-weldpoint/delete-weldpoint.component';
import { EditWeldpointComponent } from './edit-weldpoint/edit-weldpoint.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WeldpointListComponent } from './weldpoint-list/weldpoint-list.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login'},
  { path: 'registration', component:RegistrationComponent},
  { path: 'login', component:LoginComponent},
  { path: 'weldpoint-list', component:WeldpointListComponent},
  { path: 'add-weldpoint', component:AddWeldpointComponent},
  { path: 'edit-weldpoint/:id', component:EditWeldpointComponent},
  { path: 'delete-weldpoint', component:DeleteWeldpointComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
