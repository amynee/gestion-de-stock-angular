import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clint-page',
  templateUrl: './clint-page.component.html',
  styleUrls: ['./clint-page.component.scss']
})
export class ClintPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newClient(): void {
    this.router.navigate(['new-client']);
  }

}
