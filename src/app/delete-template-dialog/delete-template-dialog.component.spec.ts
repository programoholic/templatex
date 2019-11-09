import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTemplateDialogComponent } from './delete-template-dialog.component';

describe('DeleteTemplateDialogComponent', () => {
  let component: DeleteTemplateDialogComponent;
  let fixture: ComponentFixture<DeleteTemplateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTemplateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTemplateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
