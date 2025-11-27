import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Header } from './header';
import { By } from '@angular/platform-browser';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create with some properties', () => {
    expect(component).toBeTruthy();
    expect(component['title']()).toBe('Demo 1 - Angular 21');
    expect(component['subtitle']()).toBe('Indra Formación');
    expect(component['name']()).toBe('Demo1');
  });

  it('should render correctly', async () => {
    const headerElement = debugElement.query(By.css('header')).nativeElement;
    expect(headerElement?.getAttribute('aria-label')).toBe('Demo1');
    const h1Element = debugElement.query(By.css('h1')).nativeElement;
    expect(h1Element?.textContent).toContain('Demo 1');
    const pElement = debugElement.query(By.css('p')).nativeElement;
    expect(pElement?.textContent).toContain('Indra');
    const imgElement = debugElement.query(By.css('img')).nativeElement;
    expect(imgElement?.getAttribute('alt')).toBe('Logo de Angular');
  });
});
