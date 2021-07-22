import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @ViewChild('form') assignmentForm: NgForm;
  user = {
    email: "",
    level: "",
    password: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.assignmentForm);
    this.user.email = this.assignmentForm.value.email;
    this.user.level = this.assignmentForm.value.subscription;
    this.user.password = this.assignmentForm.value.password;
  }
}
