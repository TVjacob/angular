import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = Array<Student>();
  student1: Student = {
    studentname: "tendo",
    studentclass: "year1",
    studentid: 1,
  };
  student: Student = {
    studentname: "victo",
    studentclass: "year3",
    studentid: 1,
  };
  student2: Student = {
    studentname: "test",
    studentclass: "year2",
    studentid: 2,
  };
  student3: Student = {
    studentname: "grace",
    studentclass: "yr4",
    studentid: 1,
  };
  // student4: Student = {
  //   studentname: "test",
  //   studentclass: "year2",
  //   studentid: 2,
  // };


  constructor() { }

  get() {
    this.students.push(this.student);
    this.students.push(this.student1);
    this.students.push(this.student2);
    return this.students
  }
  onAdd(){
    this.students.push(this.student3);
    return this.students
  }
  onDelete(){
    this.students.pop();

    return this.students;

  }


}
