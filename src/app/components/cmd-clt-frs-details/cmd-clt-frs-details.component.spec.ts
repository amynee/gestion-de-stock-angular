import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdCltFrsDetailsComponent } from './cmd-clt-frs-details.component';

describe('CmdCltFrsDetailsComponent', () => {
  let component: CmdCltFrsDetailsComponent;
  let fixture: ComponentFixture<CmdCltFrsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdCltFrsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmdCltFrsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
