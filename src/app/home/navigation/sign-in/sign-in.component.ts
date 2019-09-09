import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    minLen = 6;
    hide = true;

  constructor() { }

  ngOnInit() {
  }
  firstNameFormControl = new FormControl('', [
        Validators.required
        ]);
    secondNameFormControl = new FormControl('', [
        Validators.required,
        ]);
    usernameFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLen),
        ]);
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
        ]);
    passFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(this.minLen),
       ]);
    confirmFormControl = new FormControl('', [
       Validators.required,
       ]);
}
