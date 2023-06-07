import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  books: Book[] = [
    {
      id: 1,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
    {
      id: 2,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
    {
      id: 3,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
    {
      id: 4,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
    {
      id: 5,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
    {
      id: 6,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
    {
      id: 7,
      title: "String",
      price: 78898,
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.",
      img_src: "",
      file_path: "",
      page_no: 1,

    },
  ]



  constructor() { }
  getbooks(){
    return this.books;
  }

  getbook(id:number){
    return this.books.filter((data) => data.id == id);
  }
  delete(id: number) {
     this.books.filter((data) => data.id != id);
  }
  addbook(book:Book){
     this.books.push(book);
  }
}
