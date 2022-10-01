import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CltsFrsDetailsComponent } from './clts-frs-details.component';

describe('CltsFrsDetailsComponent', () => {
  let component: CltsFrsDetailsComponent;
  let fixture: ComponentFixture<CltsFrsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CltsFrsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CltsFrsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
