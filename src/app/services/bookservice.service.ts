import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  books: Book[] = [
    {
      id:1,
      title:"4_Steps_to_Enroll_and_Coach_Business_Workbook_v2",
      price:75000,
      description:"Print this workbook before the Masterclass so you can take notes as you listen. You can also download and type directly in the workbook to save paper.",
      img_src:"assest/4steps.JPG",
      file_path:"",
      category:"motivator",
      author:"AJIT NAWALKHA",
    },
    {
      id:2,
      title:"5 WAYS CBD HELPS  PREVENT & TREAT  CANCER",
      price:15000,
      description:"The information contained herein is not intended to replace a one-on-one relationship with a doctor or qualified healthcare professional. Therefore, this information is not intended as medical advice, but rather a sharing of knowledge and information based on our or as noted other parties’ research and experience. TSP Publishing encourages you to make your own health care decisions based on your judgment and research in partnership with a qualified healthcare professional. These statements have not been evaluated by the United States Food and Drug Administration or any other regulatory body",
      img_src:"assest/5Ways.JPG",
      file_path:"",
      category:"Health",
      author:"Dr David Bearman",
    },
    {
      id:3,
      title:"27 FOODS  THAT HELP PREVENT & HEAL CANCER",
      price:15000,
      description:"Easily recognizable due to its characterisঞc white and yellow flowers, Feverfew has been  a staple in tradiঞonal medicine for treaঞng headaches and migraines. Recently, Feverfew has stepped into the limelight as a potenঞal cancer  killer.",
      img_src:"assest/27foods.JPG",
      file_path:"",
      category:"Health",
      author:"Dr vidDa Searman",
    },
    {
      id:4,
      title:"Advanced Java",
      price:150000,
      description:"Java programming language, originated in Sun Microsystems and released back in 1995, is one of the most widely used pro- gramming languages in the world, according to TIOBE Programming Community Index. Java is a general-purpose programming language. It is attractive to software developers primarily due to its powerful library and runtime, simple syntax, rich set of sup- ported platforms (Write Once, Run Anywhere - WORA) and awesome community.In this tutorial we are going to cover advanced Java concepts, assuming that our readers already have some basic knowledge of the language. It is by no means a complete reference, rather a detailed guide to move your Java skills to the next level. Along the course, there will be a lot of code snippets to look at. Where it makes sense, the same example will be presented using Java 7 syntax as well as Java 8 one. ",
      img_src:"assest/advancedjava.JPG",
      file_path:"",
      category:"learn",
      author:"ANDRIY REDKO",
    },
    {
      id:5,
      title:"Beginning Hibernate, 2nd edition 2010",
      price:150000,
      description:"Jeff and  Dave would like to thank the staff of Apress for their consistent good humor in the face of looming deadlines. Particular thanks are due  to Debra Kelly, our ever-present project manager, for keeping this book on the rails; and  to Patrick Meader, for correcting our dodgy  spelling and  grammar. Thanks to Fran  Parnell, as well, for managing the project in its early stages. Special thanks to Jonathan Gennick for his contributions and  particularly for his help directing the new edition. Thanks also to Steve Anglin for letting us write for Apress and  to Sumit Pal for his contributions as technical reviewer. Finally, thanks are due  to the Hibernate team for producing an awesome piece of software. Jeff would like to thank Cheri for putting up with endless late nights to meet chapter deadlines; he would also like to thank Rocky for giving him a reason to put  the laptop away on a sunny day. He would also like to thank his friends Roman and  Jason  for reviewing parts of the book. ",
      img_src:"assest/Bhibernate.JPG",
      file_path:"",
      category:"learn",
      author:"Jeff Linwood and Dave Minter ",
    },
    {
      id:6,
      title:"Css CookBook",
      price:150000,
      description:"Fabio is a passionate student in web tehnologies including front-end (HTML/CSS) and web design. He likes exploring as much as possible about the world wide web and how it can be more productive for us all. Currently he studies Computer Engineering, at the same time he works as a freelancer on both web programming and graphic design. ",
      img_src:"assest/csscook.JPG",
      file_path:"",
      category:"learn",
      author:"Fabio Cimo",
    },
    {
      id:6,
      title:"HTML CookBook",
      price:150000,
      description:"WCGs (Web Code Geeks) is an independent online community focused on creating the ultimate Web developers resource center;targeted at the technical architect, technical team lead (senior developer), project manager and junior developers alike.",
      img_src:"assest/htmlbook.JPG",
      file_path:"",
      category:"learn",
      author:"WCGs (Web Code Geeks)",
    },
   ];



  constructor() { }
  getBooks(){
    console.log("the sauh ",this.books.length);
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
  getByCat(cat:String){
    return this.books.filter((data) => data.category == cat);
 }
}
