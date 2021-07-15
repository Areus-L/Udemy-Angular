import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css'],
  styles: [`
    .fontColor {
      color: white;
    }
  `]
})
export class AssignmentThreeComponent implements OnInit {
  visibility = true;
  clicks = [0];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleVisibility(){
    this.clicks.push(this.clicks[this.clicks.length - 1] + 1);
    this.visibility = !this.visibility;
  }
}
