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
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    ItemsComponent,
    DashboardComponent,
    LoginComponent,
    ProductsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterailModuleModule,
    BrowserAnimationsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
