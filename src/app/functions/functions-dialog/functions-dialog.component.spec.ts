import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsDialogComponent } from './functions-dialog.component';

describe('FunctionsDialogComponent', () => {
  let component: FunctionsDialogComponent;
  let fixture: ComponentFixture<FunctionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
