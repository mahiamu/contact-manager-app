import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
    {path: '', redirectTo: '/contacts/home', pathMatch: 'full'},
    {path: 'contacts/home', component : HomeComponent},
    {path: 'contacts/login', component : LoginComponent},
    {path: 'contacts/signup', component : SignupComponent},
    {path: 'contacts/admin', component : ContactManagerComponent},
    {path: 'contacts/add', component : AddContactComponent},
    {path: 'contacts/edit/:contactId', component : EditContactComponent},
    {path: 'contacts/view/:contactId', component : ViewContactComponent},
    {path: '**', component : PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    }
