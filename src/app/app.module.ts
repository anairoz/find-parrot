import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatInputModule, MatSelectModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './all-products/add-product/add-product.component';
import { MainComponent } from './home/main/main.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { ProductsComponent } from './home/products/products.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { FooterComponent } from './home/footer/footer.component';
import { SignInComponent } from './home/navigation/sign-in/sign-in.component';
import { LogInComponent } from './home/navigation/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllProductsComponent,
    PageNotFoundComponent,
    AddProductComponent,
    MainComponent,
    NavigationComponent,
    ProductsComponent,
    TestimonialsComponent,
    FooterComponent,
    SignInComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddProductComponent, LogInComponent, SignInComponent]
})
export class AppModule { }
