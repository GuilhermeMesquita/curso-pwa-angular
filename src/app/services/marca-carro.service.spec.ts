/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarcaCarroService } from './marca-carro.service';

describe('Service: MarcaCarro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarcaCarroService]
    });
  });

  it('should ...', inject([MarcaCarroService], (service: MarcaCarroService) => {
    expect(service).toBeTruthy();
  }));
});
