import { TestBed } from '@angular/core/testing';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

import { AlertMessageService } from './alert-message.service';

describe('AlertMessageService', () => {
  let service: AlertMessageService;
  let routerEvents$: Subject<any>;

  beforeEach(() => {
    routerEvents$ = new Subject<any>();

    TestBed.configureTestingModule({
      providers: [
        AlertMessageService,
        {
          provide: Router,
          useValue: {
            events: routerEvents$.asObservable()
          }
        }
      ]
    });

    service = TestBed.inject(AlertMessageService);
  });

  it('should create without requiring PrimeNG MessageService', () => {
    expect(service).toBeTruthy();
  });

  it('should emit alert messages through the observable contract', (done) => {
    const alert = { severity: 'success', summary: 'Saved', detail: 'Changes applied' };

    service.getAlert().subscribe(message => {
      expect(message).toEqual(alert);
      done();
    });

    service.setAlert(alert);
  });
});
