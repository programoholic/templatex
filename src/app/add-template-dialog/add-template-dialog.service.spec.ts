import { TestBed } from '@angular/core/testing';

import { AddTemplateDialogService } from './add-template-dialog.service';

describe('AddTemplateDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTemplateDialogService = TestBed.get(AddTemplateDialogService);
    expect(service).toBeTruthy();
  });
});
