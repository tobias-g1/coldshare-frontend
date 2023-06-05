import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLandingComponent } from './share-landing.component';

describe('ShareLandingComponent', () => {
  let component: ShareLandingComponent;
  let fixture: ComponentFixture<ShareLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
