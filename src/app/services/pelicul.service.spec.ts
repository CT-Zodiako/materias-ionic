import { TestBed } from '@angular/core/testing';

import { PeliculService } from './pelicul.service';

describe('PeliculService', () => {
  let service: PeliculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
