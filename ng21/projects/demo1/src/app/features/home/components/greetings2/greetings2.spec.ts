import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greetings2 } from './greetings2';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Greetings2', () => {
  let component: Greetings2;
  let fixture: ComponentFixture<Greetings2>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greetings2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Greetings2);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should type a user name and see in the document", () => {
    const inputElement = debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    const outputElement = debugElement.query(By.css('output')).nativeElement as HTMLElement;

    // Simular la entrada del usuario
    inputElement.value = 'Carlos';
    inputElement.dispatchEvent(new Event('input'));
    // inputElement.debugElement.triggerEventHandler('input');
    fixture.detectChanges();
    expect(outputElement.textContent).toContain('Carlos');

    // Reset the name
    const buttonElement = debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    buttonElement.click();
    fixture.detectChanges();
    expect(outputElement.textContent).toContain('amigo');
  });
});
