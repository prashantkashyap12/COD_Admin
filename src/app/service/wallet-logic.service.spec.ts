import { TestBed } from '@angular/core/testing';

import { WalletLogicService } from './wallet-logic.service';

describe('WalletLogicService', () => {
  let service: WalletLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
