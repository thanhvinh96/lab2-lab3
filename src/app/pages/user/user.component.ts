import { Component, OnInit } from '@angular/core';
import { RouterModule,ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userid:any;
  constructor(private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.userid=this.route.snapshot.params['id']
    }

  goHome():void{
    this.router.navigate([''])
  }
  goAbout():void{
    this.router.navigate(['about'])
  }
}
