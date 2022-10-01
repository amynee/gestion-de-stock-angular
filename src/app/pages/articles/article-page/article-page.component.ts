import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  nouvelArticle() {
    this.router.navigate(['nouvel-article'])
  }

}
