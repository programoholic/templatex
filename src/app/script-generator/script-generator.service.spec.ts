import { TestBed } from '@angular/core/testing';

import { ScriptGeneratorService } from './script-generator.service';

describe('ScriptGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptGeneratorService = TestBed.get(ScriptGeneratorService);
    expect(service).toBeTruthy();
  });
});
