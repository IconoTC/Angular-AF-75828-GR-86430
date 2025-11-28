import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';
import { Layout } from './core/components/layout/layout';
import { Menu } from './core/components/menu/menu';
import { RouterOutlet } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render children components', async () => {
    const layoutElement: HTMLElement = debugElement.query(By.directive(Layout)).nativeElement;
    expect(layoutElement).toBeTruthy();

    const menuElement: HTMLElement = debugElement.query(By.directive(Menu)).nativeElement;
    expect(menuElement).toBeTruthy();

    const routerOutlet = debugElement.query(By.directive(RouterOutlet)).nativeElement;
    expect(routerOutlet).toBeTruthy();
  });
});
