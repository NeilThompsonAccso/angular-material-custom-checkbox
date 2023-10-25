import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CustomCheckboxComponent implements OnInit {
  @Input() text: string;
  @Input() checked: boolean = false;
  @Output() onCheckChange = new EventEmitter<boolean>();

  toggleCheckbox() {
    this.checked = !this.checked;
    this.onCheckChange.emit(this.checked);
  }

  ngOnInit() {
    const checkbox = document.getElementById(
      'custom-checkbox'
    ) as HTMLInputElement | null;

    if (checkbox != null && this.checked) {
      checkbox.checked = true;
    }
  }
}
