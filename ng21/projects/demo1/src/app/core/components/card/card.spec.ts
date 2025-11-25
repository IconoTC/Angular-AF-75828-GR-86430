import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const TEXT_CONTENT = 'Contenido de la tarjeta';

@Component({
  imports: [Card],
  template: `<ind-card>{{ content }}</ind-card>`,
})
class TestComponent {
  protected readonly content = TEXT_CONTENT;
}

describe('Card', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content inside the card', () => {
    const cardElement: HTMLElement = debugElement.query(By.directive(Card)).nativeElement;
    expect(cardElement.textContent).toContain(TEXT_CONTENT);
  });
});
