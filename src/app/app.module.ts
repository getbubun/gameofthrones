import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { GotHttpService } from './got-http.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader'
import { OrderModule } from 'ngx-order-pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    OrderModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'', redirectTo :'home',pathMatch:'full'},
      {path:'books/:urlId',component:BookComponent},
      {path:'houses/:urlId',component:HouseComponent},
      {path:'characters/:urlId',component:CharacterComponent},
      {path :'**',component:NotFoundComponent}
     
    ])
  ],
  providers: [GotHttpService,HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
