import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { AlertMessageComponent } from './alert-message.component';

describe('AlertMessageComponent', () => {
  let component: AlertMessageComponent;
  let fixture: ComponentFixture<AlertMessageComponent>;
  let messageService: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertMessageComponent],
      providers: [MessageService]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertMessageComponent);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve inline text from summary and detail', () => {
    fixture.componentRef.setInput('summary', 'Saved');
    fixture.componentRef.setInput('detail', 'Changes have been applied');
    fixture.detectChanges();

    expect(component.resolvedText()).toBe('Saved - Changes have been applied');
  });

  it('should delegate toast messages to MessageService', () => {
    spyOn(messageService, 'add');

    component.show({ severity: 'success', summary: 'Saved', detail: 'Done' });

    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Saved',
      detail: 'Done',
      life: undefined,
      closable: undefined,
      key: 'app-alert-toast'
    });
  });

  it('should clear toast messages with the configured key', () => {
    spyOn(messageService, 'clear');

    component.clear();

    expect(messageService.clear).toHaveBeenCalledWith('app-alert-toast');
  });
});