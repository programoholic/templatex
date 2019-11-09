import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemplateDialogComponent } from './add-template-dialog.component';

describe('AddTemplateDialogComponent', () => {
  let component: AddTemplateDialogComponent;
  let fixture: ComponentFixture<AddTemplateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTemplateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
