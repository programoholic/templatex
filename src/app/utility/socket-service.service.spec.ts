import { TestBed } from '@angular/core/testing';

import { SocketServiceService } from './socket-service.service';

describe('SocketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketServiceService = TestBed.get(SocketServiceService);
    expect(service).toBeTruthy();
  });
});
