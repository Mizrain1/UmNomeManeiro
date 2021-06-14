import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaSobreComponent } from './aba-sobre.component';

describe('AbaSobreComponent', () => {
  let component: AbaSobreComponent;
  let fixture: ComponentFixture<AbaSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbaSobreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
