import { TestBed } from '@angular/core/testing';

import { TemplateManagementService } from './template-management.service';

describe('TemplateManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateManagementService = TestBed.get(TemplateManagementService);
    expect(service).toBeTruthy();
  });
});
