import { Component } from "@angular/core";

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [`
    h3 {
      color: red;
      border-style: groove;
      border-width: 70px;
      border-color: red;
      padding: 15px;
      text-align: center;
      font-family: Georgia;
      max-width: 80%;
      background-color: rgb(253, 167, 161);
    }

  `]
})
export class WarningAlertComponent {}
