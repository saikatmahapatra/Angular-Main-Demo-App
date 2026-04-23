import { TestBed, inject } from '@angular/core/testing';

import { AppDemoService } from './app-demo.service';

describe('AppDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppDemoService]
    });
  });

  it('should be created', inject([AppDemoService], (service: AppDemoService) => {
    expect(service).toBeTruthy();
  }));
});
