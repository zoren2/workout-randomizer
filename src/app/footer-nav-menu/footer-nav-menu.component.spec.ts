import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavMenuComponent } from './footer-nav-menu.component';

describe('FooterNavMenuComponent', () => {
  let component: FooterNavMenuComponent;
  let fixture: ComponentFixture<FooterNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
