import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintPageComponent } from './clint-page.component';

describe('ClintPageComponent', () => {
  let component: ClintPageComponent;
  let fixture: ComponentFixture<ClintPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
