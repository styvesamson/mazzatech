import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColaboradorComponent } from './add-patient.component';

describe('AddColaboradorComponent', () => {
  let component: AddColaboradorComponent;
  let fixture: ComponentFixture<AddColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColaboradorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
