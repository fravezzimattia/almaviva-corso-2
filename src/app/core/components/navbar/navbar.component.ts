import { Component, OnInit } from '@angular/core';
import { AppRoutings } from '../../configs/app-routings';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public appRoutings = AppRoutings;
  
  constructor() { }

  ngOnInit(): void {
  }

}
