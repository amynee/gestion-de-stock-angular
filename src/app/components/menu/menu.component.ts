import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-gauge',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fa-solid fa-eye',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: "fa-sharp fa-solid fa-chart-simple",
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
        titre: 'Articles',
        icon: 'fa-solid fa-boxes-stacked',
        url: '',
        sousMenu: [
          {
            id: '21',
            titre: 'Articles',
            icon: 'fa-solid fa-box-archive',
            url: ''
          },
          {
            id: '22',
            titre: 'Mouvements de stock',
            icon: 'fa-solid fa-list',
            url: ''
          }
        ]
    },
    {
      id: '3',
        titre: 'Clients',
        icon: 'fa-solid fa-users',
        url: '',
        sousMenu: [
          {
            id: '31',
            titre: 'Clients',
            icon: 'fa-solid fa-user',
            url: ''
          },
          {
            id: '32',
            titre: 'Commandes clients',
            icon: 'fa-solid fa-basket-shopping',
            url: ''
          }
        ]
    },
    {
      id: '4',
        titre: 'Fournisseurs',
        icon: 'fa-solid fa-users-rectangle',
        url: '',
        sousMenu: [
          {
            id: '41',
            titre: 'Fournisseurs',
            icon: 'fa-solid fa-user-check',
            url: ''
          },
          {
            id: '42',
            titre: 'Commandes fournisseurs',
            icon: 'fa-solid fa-truck-fast',
            url: ''
          }
        ]
    },
    {
      id: '5',
        titre: 'Parametrages',
        icon: 'fa-solid fa-gears',
        url: '',
        sousMenu: [
          {
            id: '51',
            titre: 'Categories',
            icon: 'fa-solid fa-dice-d20',
            url: ''
          },
          {
            id: '52',
            titre: 'Utilisateurs',
            icon: 'fa-solid fa-users',
            url: ''
          }
        ]
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }

}
