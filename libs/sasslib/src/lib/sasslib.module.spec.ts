import { async, TestBed } from '@angular/core/testing';
import { SasslibModule } from './sasslib.module';

describe('SasslibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SasslibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SasslibModule).toBeDefined();
  });
});
