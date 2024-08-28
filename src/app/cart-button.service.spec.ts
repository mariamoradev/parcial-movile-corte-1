import { TestBed } from '@angular/core/testing';

import { CartButtonService } from './cart-button.service';

describe('CartButtonService', () => {
  let service: CartButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
