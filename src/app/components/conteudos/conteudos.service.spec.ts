import { TestBed } from '@angular/core/testing';

import { ConteudosService } from './conteudos.service';

describe('ConteudosService', () => {
  let service: ConteudosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteudosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
