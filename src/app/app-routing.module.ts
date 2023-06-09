import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './bookspage/book/book.component';
import { BooksComponent } from './bookspage/books/books.component';
import { LoginComponent } from './auth/login/login.component';
import { ItemsComponent } from './cart/items/items.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'books', component: BooksComponent },
  { path: 'login', component:LoginComponent },
  { path: 'cart', component:ItemsComponent },
  { path: 'admin', component:DashboardComponent },
  { path: 'dashboard/reports', component:DashboardComponent },
  { path: 'dashboard/manage-books', component:ProductsComponent },
  { path: 'dashboard/manage-users', component:UsersComponent },
  { path: 'register', component:BooksComponent },
  { path: '**', component:BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
