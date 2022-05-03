import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor (private router:Router) {}

  goSolo(){
      this.router.navigate(['solo']);
  }

  goDuo(){
    this.router.navigate(['duo']);
  }

  ngOnInit(): void {
  }

}
