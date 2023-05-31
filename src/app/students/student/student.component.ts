import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/studentservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService:StudentService){
  }

  ngOnInit(): void {
    this.students =this.studentService.get();
  }
  onAdd(){
    return this.students=this.studentService.onAdd();
  }
  onDelete(){
    return this.students=this.studentService.onDelete();

  }
}
