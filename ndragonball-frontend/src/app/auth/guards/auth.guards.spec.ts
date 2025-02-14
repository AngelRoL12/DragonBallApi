import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsComponent } from './auth.guards';

describe('GuardsComponent', () => {
  let component: GuardsComponent;
  let fixture: ComponentFixture<GuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
