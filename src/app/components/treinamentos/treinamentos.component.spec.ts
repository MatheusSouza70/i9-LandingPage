import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentosComponent } from './treinamentos.component';

describe('TreinamentosComponent', () => {
  let component: TreinamentosComponent;
  let fixture: ComponentFixture<TreinamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinamentosComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TreinamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
