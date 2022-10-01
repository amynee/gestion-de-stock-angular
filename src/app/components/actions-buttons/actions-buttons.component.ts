import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.scss']
})
export class ActionsButtonsComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  eventOnNewButton(): void {
    this.clickEvent.emit();
  }

}
