import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmd-clt-frs-page',
  templateUrl: './cmd-clt-frs-page.component.html',
  styleUrls: ['./cmd-clt-frs-page.component.scss']
})
export class CmdCltFrsPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newCommande(): void {
    this.router.navigate(['nouvel-commande-client']);
  }

}
