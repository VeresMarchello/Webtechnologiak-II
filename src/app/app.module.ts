import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeldpointListComponent } from './weldpoint-list/weldpoint-list.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { WeldPointService } from './services/weldpoint.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AddWeldpointComponent } from './add-weldpoint/add-weldpoint.component';
import { EditWeldpointComponent } from './edit-weldpoint/edit-weldpoint.component';
import { DeleteWeldpointComponent } from './delete-weldpoint/delete-weldpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    WeldpointListComponent,
    LoginComponent,
    RegistrationComponent,
    AddWeldpointComponent,
    EditWeldpointComponent,
    DeleteWeldpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, WeldPointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
