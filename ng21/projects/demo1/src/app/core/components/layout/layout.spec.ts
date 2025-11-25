import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layout } from './layout';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

const TEXT = "Hello World";
const MAIN_MENU = "main-menu";

@Component({
  imports: [Layout],
  template: `<ind-layout>
    <div class="main-menu">{{ menu }}</div>
    {{ text }}
  </ind-layout>`,
})
class TestComponent {
  protected readonly text = TEXT;
  protected readonly menu = MAIN_MENU;
}

describe('Layout', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it("should render content and child components correctly", () => {

    const layoutElement: HTMLElement = debugElement.query(
      By.directive(Layout)
    ).nativeElement;
    expect(layoutElement).toBeTruthy();
    expect(layoutElement.textContent).toContain(TEXT);

    const headerElement: HTMLElement = debugElement.query(
      By.directive(Header)
    ).nativeElement;
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toContain(MAIN_MENU);

    const footerElement: HTMLElement = debugElement.query(
      By.directive(Footer)
    ).nativeElement;
    expect(footerElement).toBeTruthy();
  });
});
