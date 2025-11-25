import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have counter responding to buttons + y -', () => {
    const buttons = debugElement
      .queryAll(By.css('button'))
      .map((btnDe) => btnDe.nativeElement as HTMLButtonElement);
    const output = debugElement.query(By.css('output')).nativeElement;

    expect(output.textContent).toContain('0');
    // Increment
    buttons[1].click();
    fixture.detectChanges();
    expect(output.textContent).toContain('1');
    // Decrement
    buttons[0].click();
    fixture.detectChanges();
    expect(output.textContent).toContain('0');
  });

  it('should have counter responding to button reset', () => {
    const buttons = debugElement
      .queryAll(By.css('button'))
      .map((btnDe) => btnDe.nativeElement as HTMLButtonElement);
    const output = debugElement.query(By.css('output')).nativeElement;

    // Increment
    component['counter'].set(300);
    fixture.detectChanges();
    expect(output.textContent).toContain('300');
    // // Reset
    buttons[2].click();
    fixture.detectChanges();
    expect(output.textContent).toContain('0');
  });
});
