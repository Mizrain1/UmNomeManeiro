import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaRegrasComponent } from './aba-regras.component';

describe('AbaRegrasComponent', () => {
  let component: AbaRegrasComponent;
  let fixture: ComponentFixture<AbaRegrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbaRegrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaRegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
