import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtstkComponentComponent } from './mvtstk-component.component';

describe('MvtstkComponentComponent', () => {
  let component: MvtstkComponentComponent;
  let fixture: ComponentFixture<MvtstkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtstkComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvtstkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
