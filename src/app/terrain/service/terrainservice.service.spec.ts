import { TestBed } from '@angular/core/testing';

import { TerrainserviceService } from './terrainservice.service';

describe('TerrainserviceService', () => {
  let service: TerrainserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrainserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
