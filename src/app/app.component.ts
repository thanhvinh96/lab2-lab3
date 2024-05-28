import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/lab 2/header/header.component';
import { ProductlistComponent } from './components/lab 2/productlist/productlist.component';
import { HeaderLab3Component } from './components/lab3/header-lab3/header-lab3.component';
import { ProductlistLab3Component } from './components/lab3/productlist-lab3/productlist-lab3.component';
import { StarComponent } from './components/lab3/star/star.component';
import { FormComponent } from './form/form.component';
import { RformComponent } from './rform/rform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,ProductlistComponent,HeaderLab3Component,ProductlistLab3Component,StarComponent,RouterLink,RouterModule,FormComponent,RformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
