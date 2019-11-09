import { TestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';

describe('LandingPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingPageService = TestBed.get(LandingPageService);
    expect(service).toBeTruthy();
  });
});
