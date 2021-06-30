import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLateralComponent } from './sidebarLateral.component';

describe('Sidebar2Component', () => {
  let component: SidebarLateralComponent;
  let fixture: ComponentFixture<SidebarLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
