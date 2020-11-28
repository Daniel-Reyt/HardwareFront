import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule } from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListComposantComponent } from './composant/list-composant/list-composant.component';
import { AddComposantComponent } from './composant/add-composant/add-composant.component';
import { ListConfigComponent } from './config/list-config/list-config.component';
import { AddConfigComponent } from './config/add-config/add-config.component';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatComponent } from './chat/chat.component';
import {OrderModule} from "ngx-order-pipe";
import { RegisterComponent } from './user/register/register.component';
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { UpdateUsernameComponent } from './user/update-username/update-username.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUserComponent,
    ListComposantComponent,
    AddComposantComponent,
    ListConfigComponent,
    AddConfigComponent,
    LoginComponent,
    NavbarComponent,
    ChatComponent,
    RegisterComponent,
    UpdatePasswordComponent,
    UpdateUsernameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
