import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {
  myForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
    });
    onSubmit() {
    if(this.myForm.valid) console.log(this.myForm.value);
    }
}
