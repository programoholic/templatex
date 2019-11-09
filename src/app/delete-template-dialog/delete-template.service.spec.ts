import { TestBed } from '@angular/core/testing';

import { DeleteTemplateService } from './delete-template.service';

describe('DeleteTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteTemplateService = TestBed.get(DeleteTemplateService);
    expect(service).toBeTruthy();
  });
});
