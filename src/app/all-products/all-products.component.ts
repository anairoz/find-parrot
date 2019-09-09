import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddProductComponent } from './add-product/add-product.component'
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
      console.log('lol1')
      const dialogRef = this.dialog.open(AddProductComponent, {
          width: '350px',
          data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });

  }

}
