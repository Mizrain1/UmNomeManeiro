import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTopComponent } from './sidebarTop.component';

describe('SidebarComponent', () => {
  let component: SidebarTopComponent;
  let fixture: ComponentFixture<SidebarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
