import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaContatoComponent } from './aba-contato.component';

describe('AbaContatoComponent', () => {
  let component: AbaContatoComponent;
  let fixture: ComponentFixture<AbaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbaContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
