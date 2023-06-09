import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSource: Book[] = [];
  displayedColumns: string[] = [
    'title',
    'price',
    'author',
    'image',
    'delete',
  ];
  constructor(private bookService:BookserviceService){
  }
    deleteBook(book: Book) {
    this.bookService.delete(book.id);
    }

  ngOnInit(): void {
    this.dataSource=this.bookService.getBooks();
  }


}
