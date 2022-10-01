import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdCltFrsPageComponent } from './cmd-clt-frs-page.component';

describe('CmdCltFrsPageComponent', () => {
  let component: CmdCltFrsPageComponent;
  let fixture: ComponentFixture<CmdCltFrsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdCltFrsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmdCltFrsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
