import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur-page',
  templateUrl: './fournisseur-page.component.html',
  styleUrls: ['./fournisseur-page.component.scss']
})
export class FournisseurPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newFournisseur() {
    this.router.navigate(['new-fournisseur'])
  }

}
