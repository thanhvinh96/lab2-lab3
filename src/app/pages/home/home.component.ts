import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(){
    console.log('constructor');
  }
  timer:any;
  phones:any[]=[];
  ngOnInit(): void {
    console.log('ngOnInit');
    this.phones = ['Iphone','Samsung','oppo'];
// hàm chạy theo 1 khoản thời gian    
    // this.timer = setInterval(()=>{
    //   console.log('timer');
    // },1000)
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    var samsungli=document.getElementById('Samsung');
    console.log(samsungli);
    
  }
  ngOnDestroy(): void {
    console.log('Destroy');
    clearInterval(this.timer)
  }
}
