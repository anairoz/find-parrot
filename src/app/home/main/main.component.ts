import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openSnackBar() {
      this._snackBar.open("Sorry, here is nothing for you", "OK :(", {
        duration: 2000,
      });
  }
  openSnackBarSearch() {
      this._snackBar.open("Sorry, this button doesn't work", "OK :(", {
        duration: 3000,
      });
  }
}
