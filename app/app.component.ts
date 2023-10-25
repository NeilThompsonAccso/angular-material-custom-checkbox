import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isChecked: boolean = true;

  onCheckChange(value: boolean) {
    this.isChecked = value;
  }
}
