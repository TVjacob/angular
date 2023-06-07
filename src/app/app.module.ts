import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './bookspage/book/book.component';
import { MaterailModuleModule } from './MaterialDesign/materail-module/materail-module.module';
import { BooksComponent } from './bookspage/books/books.component';
import { ItemsComponent } from './cart/items/items.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    ItemsComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterailModuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
