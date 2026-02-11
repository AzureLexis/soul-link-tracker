import { TestBed } from '@angular/core/testing';

import { PokemonListProvider } from './pokemon-list-provider';

describe('PokemonListProvider', () => {
  let service: PokemonListProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
