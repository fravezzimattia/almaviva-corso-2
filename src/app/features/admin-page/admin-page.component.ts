import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(
    public configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
