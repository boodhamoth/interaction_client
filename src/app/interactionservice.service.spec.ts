import { TestBed, inject } from '@angular/core/testing';

import { InteractionserviceService } from './interactionservice.service';

describe('InteractionserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionserviceService]
    });
  });

  it('should be created', inject([InteractionserviceService], (service: InteractionserviceService) => {
    expect(service).toBeTruthy();
  }));
});
