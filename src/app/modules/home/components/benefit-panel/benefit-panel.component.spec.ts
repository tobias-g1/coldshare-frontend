import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitPanelComponent } from './benefit-panel.component';

describe('BenefitPanelComponent', () => {
  let component: BenefitPanelComponent;
  let fixture: ComponentFixture<BenefitPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
