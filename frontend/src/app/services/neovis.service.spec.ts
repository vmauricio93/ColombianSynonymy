import { TestBed } from '@angular/core/testing';

import { NeovisService } from './neovis.service';

describe('NeovisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeovisService = TestBed.get(NeovisService);
    expect(service).toBeTruthy();
  });
});
