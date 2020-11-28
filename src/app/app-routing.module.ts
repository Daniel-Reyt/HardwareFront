import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {ListConfigComponent} from "./config/list-config/list-config.component";
import {AddConfigComponent} from "./config/add-config/add-config.component";
import {ListComposantComponent} from "./composant/list-composant/list-composant.component";
import {AddComposantComponent} from "./composant/add-composant/add-composant.component";
import {LoginComponent} from "./user/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {RegisterComponent} from "./user/register/register.component";
import {UpdateCommand} from "@angular/cli/commands/update-impl";
import {UpdatePasswordComponent} from "./user/update-password/update-password.component";
import {UpdateUsernameComponent} from "./user/update-username/update-username.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'update-password', component: UpdatePasswordComponent},
  {path: 'update-username', component: UpdateUsernameComponent},

  {path: 'home', component: HomeComponent},
  {path: 'home/:username', component: HomeComponent},

  {path: 'list-user', component: ListUserComponent},

  {path: 'list-config', component: ListConfigComponent},
  {path: 'add-config', component: AddConfigComponent},

  {path: 'list-composant', component: ListComposantComponent},
  {path: 'add-composant', component: AddComposantComponent},

  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
