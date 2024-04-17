import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

const appRoutes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
