import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareModelComponent } from './share-model.component';

describe('ShareModelComponent', () => {
  let component: ShareModelComponent;
  let fixture: ComponentFixture<ShareModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
