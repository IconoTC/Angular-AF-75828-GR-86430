import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer content', () => {
    fixture.detectChanges();
    const pElements: HTMLParagraphElement[] = debugElement
      .queryAll(By.css('p'))
      .map((de) => de.nativeElement);
    expect(pElements.length).toBe(3);
    expect(pElements[0].textContent).toBe('Alejandro Cerezo');
    expect(pElements[1].textContent).toBe('Indra Formación');
    const currentYear = new Date().getFullYear().toString();
    expect(pElements[2].textContent).toBe(currentYear);
  });
});
