import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtStkDetailsComponent } from './mvt-stk-details.component';

describe('MvtStkDetailsComponent', () => {
  let component: MvtStkDetailsComponent;
  let fixture: ComponentFixture<MvtStkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtStkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvtStkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
