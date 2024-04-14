import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerpagination',
  templateUrl: './headerpagination.component.html',
  styleUrls: ['./headerpagination.component.scss'],
})
export class HeaderpaginationComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
